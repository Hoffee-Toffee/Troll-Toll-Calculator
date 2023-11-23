import { useAuthorisedRequest } from '../useAuthorisedRequest'
import { RawAuthUser, User } from '../../models/users'

export async function UserApi(user: RawAuthUser): Promise<User> {
  try {
    const request = useAuthorisedRequest(
      'post',
      '/api/v1/auth',
      JSON.stringify({
        email: user?.email,
        first_name: user?.given_name || user?.nickname,
        last_name: user?.family_name || user?.nickname,
        auth0_id: user?.sub,
      })
    )

    return (await (await request)()).body
  } catch (error) {
    throw console.error('Error fetching user data.', error)
  }
}
