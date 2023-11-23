//import { useParams } from 'react-router-dom'
//import { useQuery } from '@tanstack/react-query'
//import { getSingleUserApi } from '..api/users'

export default function Trollfile() {
  //const { id } = useParams()

  const user = {
    id: 2,
    email: 'dunker@trolllifestyle.ie',
    firstName: 'Dunker',
    lastName: 'O`Brien',
    auth0Id: 1,
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
