//import { useParams } from 'react-router-dom'
//import { useQuery } from '@tanstack/react-query'
import { useAuthorisedRequest } from '../useAuthorisedRequest'
import { useAuth0 } from '@auth0/auth0-react'
import { RawAuthUser, User } from '../../models/users'
import { useQuery } from '@tanstack/react-query'
import { UserApi } from '../api/user'

export default function Trollfile() {
  const { user: authUser } = useAuth0()
  console.log(authUser)

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
    return <p>Your Trollfile can't be found! What a massive error</p>
  }
  if (!user || isLoading) {
    return <p>Fetching Trollfile...</p>
  }

  // const {
  //   data: user,
  //   isError,
  //   isLoading,
  // }: {
  //   data: User | undefined
  //   isError: boolean
  //   isLoading: boolean
  // } = useQuery({
  //   queryKey: ['user', id],
  //   queryFn: () => getSingleUserApi(Number(id)),
  // })

  // if (isError) {
  //   return <p>Your bridges are gone! What a massive error</p>
  // }
  // if (!user || isLoading) {
  //   return <p>Fetching bridges from auckland...</p>
  // }

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
