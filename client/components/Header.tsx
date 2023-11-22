import { Link } from 'react-router-dom'
import { SignIn } from './SignIn'
import { SignOut } from './SignOut'

export default function Header() {
  return (
    <header>
      <div></div>
      <nav>
        <span>
          <Link to={'/'}>Home</Link>
        </span>

        <SignIn />
        <SignOut />
      </nav>
    </header>
  )
}
