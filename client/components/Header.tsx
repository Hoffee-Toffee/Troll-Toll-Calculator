import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div>
      </div>
      <nav>
        <span>
          <Link to={'/'}>Home</Link>
        </span>
        <span>
          <Link to="/bridges">Bridge List</Link>
        </span>
      </nav>
    </header>
  )
}
