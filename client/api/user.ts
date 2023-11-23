import { User } from '../../models/users'

export async function UserApi(request: any): Promise<User> {
  try {
    return (await (await request)()).body
  } catch (error) {
    throw console.error('Error fetching user data.', error)
  }
}
