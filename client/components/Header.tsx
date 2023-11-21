import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <div>
        <h1>LOGO</h1>
      </div>
      <nav>
        <button>
          <Link to={'/'}>Home</Link>
        </button>
        <button>
          <Link to="/bridges">Bridge List</Link>
        </button>
      </nav>
    </>
  )
}
