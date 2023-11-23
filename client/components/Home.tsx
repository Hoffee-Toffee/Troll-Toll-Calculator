import { Link } from 'react-router-dom'

import { useAuthorisedRequest } from '../useAuthorisedRequest'

export default function Home() {
  const request = useAuthorisedRequest('get', '/api/v1/auth', '')

  async function onClick() {
    console.log((await (await request)()).body)
  }

  return (
    <>
      <h1 className="main-title">
        THE NUMBER 1 TROLL <br /> REVENUE GENERATOR
      </h1>

      <div id="buttons-container">
        {/* <button id="sign-in-button">Log In</button>
        <button id="sign-up-button">Sign Up</button> */}
        <button className="bridges-button">
          <Link style={{ textDecoration: 'none' }} to="/bridges">
            Bridge List
          </Link>
        </button>
        <button onClick={onClick}>Click ME!!!</button>
      </div>
    </>
  )
}
