import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h1 className="main-title">THE NUMBER 1 TROLL <br/> REVENUE GENERATOR</h1>
      
      <div id="buttons-container">
        <button id="sign-in-button">Log In</button>
        <button id="sign-up-button">Sign Up</button>
        <button className="bridges-button">
            <Link style={{textDecoration: 'none'}} to="/bridges">Bridge List</Link>
        </button>
      </div>
    </>
  )
}
