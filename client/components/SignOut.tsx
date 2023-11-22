import { FormEvent } from 'react'
import { IfAuthenticated } from './IsAuthenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { useAuthorisedRequest } from '../useAuthorisedRequest'

export function SignOut() {
  const { logout } = useAuth0()

  const makeRequest = useAuthorisedRequest('get', '/api/v1/auth', undefined)

  function OnSignOut(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault()
    logout()

    console.log('Log out')
  }

  async function OnGetRequest() {
    const response = await (await makeRequest)()
    console.log(response)
  }

  return (
    <IfAuthenticated>
      <button onClick={OnSignOut}>Sign Out</button>
      <button onClick={OnGetRequest}>Create Get get request</button>
    </IfAuthenticated>
  )
}
