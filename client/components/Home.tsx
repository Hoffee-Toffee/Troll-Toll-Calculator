import { Link } from 'react-router-dom'
// import { useAuth0 } from '@auth0/auth0-react'
// import { useAuthorisedRequest } from '../useAuthorisedRequest'

export default function Home() {
  // const { user } = useAuth0()

  // const request = useAuthorisedRequest(
  //   'post',
  //   '/api/v1/auth',
  //   JSON.stringify({
  //     email: user?.email,
  //     first_name: user?.given_name || user?.nickname,
  //     last_name: user?.family_name || user?.nickname,
  //     auth0_id: user?.sub,
  //   })
  // )

  // async function onClick() {
  //   console.log((await (await request)()).body)
  // }

  return (
    <>
      <h1 className="main-title">
        THE NUMBER 1 TROLL <br /> REVENUE GENERATOR
      </h1>

      <div id="buttons-container">
        <button className="bridges-button">
          <Link style={{ textDecoration: 'none' }} to="/bridges">
            Bridge List
          </Link>
        </button>
      </div>
    </>
  )
}
