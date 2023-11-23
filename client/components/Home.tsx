import { Link } from 'react-router-dom'

export default function Home() {
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
