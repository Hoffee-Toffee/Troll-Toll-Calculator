import { useAuthorisedRequest } from '../useAuthorisedRequest'
import { useAuth0 } from '@auth0/auth0-react'
import { User } from '../../models/users'
import { useQuery } from '@tanstack/react-query'
import { UserApi } from '../api/user'

export default function Trollfile() {
  const { user: authUser } = useAuth0()

  const request = useAuthorisedRequest(
    'post',
    '/api/v1/auth',
    JSON.stringify({
      email: authUser?.email,
      first_name: authUser?.given_name || authUser?.nickname,
      last_name: authUser?.family_name || authUser?.nickname,
      auth0_id: authUser?.sub,
    })
  )

  const {
    data: user,
    isError,
    isLoading,
  }: {
    data: User | undefined
    isError: boolean
    isLoading: boolean
  } = useQuery({
    queryKey: ['user', authUser?.sub],
    queryFn: () => UserApi(request),
  })

  if (isError) {
    return <p>Your Trollfile cannot be found! What a massive error</p>
  }
  if (!user || isLoading) {
    return <p>Fetching Trollfile...</p>
  }

  return (
    <>
      <h1 id="trollfile-title">My Trollfile</h1>

      <div className="body-wrapper">
        <div className="main-container">
          <div className="container">
            <div className="left-column">
              <div className="left-content"></div>
              <div className="left-content1">
                PROFILE INFO
                <div>
                  <h2>
                    {user.firstName} {user.lastName}
                  </h2>
                </div>
                <br />
                <div>{user.email}</div>
                <br />
              </div>
            </div>
            <div className="gap"></div>
            <div className="right-column">
              <div className="right-content">ACTIVE BRIDGE</div>
              <div className="right-content1">FAVORITE BRIDGE</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
