import { Link } from 'react-router-dom'
import { SignIn } from './SignIn'
import { SignOut } from './SignOut'
import TrollfileButton from './TrollfileButton'

export default function Header() {
  return (
    <header>
      <div></div>
      <nav>
        <span>
          <Link to={'/'}>Home</Link>
        </span>

        <SignIn />
        <TrollfileButton />
        <SignOut />
      </nav>
    </header>
  )
}
