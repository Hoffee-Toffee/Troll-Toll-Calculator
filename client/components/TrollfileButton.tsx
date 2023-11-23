import { IfAuthenticated } from './IsAuthenticated'
import { Link } from 'react-router-dom'

export default function TrollfileButton() {
  return (
    <IfAuthenticated>
      <span>
        <Link to="/trollfile/:id"> Trollfile</Link>
      </span>
    </IfAuthenticated>
  )
}
