import { FormEvent } from 'react'
import { IfNotAuthenticated } from './IsAuthenticated'
import { useAuth0 } from '@auth0/auth0-react'

export function SignIn() {
  const { loginWithRedirect } = useAuth0()

  function OnSignIn(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault()
    loginWithRedirect()

    console.log('Log in')
  }

  return (
    <IfNotAuthenticated>
      <button onClick={OnSignIn}>Sign In</button>
    </IfNotAuthenticated>
  )
}
