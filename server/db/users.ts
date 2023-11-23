import connection from './connection'
import { User, AuthUser } from '../../models/users'

export async function getUser(
  authUser: AuthUser,
  db = connection
): Promise<User> {
  // Get user if existing
  let user = await db('users')
    .select('id')
    .where('auth0_id', authUser.auth0_id)
    .first()

  if (!user) {
    // If not then add to database, then return that new record
    user = await db('users').select('id').insert(authUser)
    user = user[0]
  } else {
    user = user.id
  }

  return user
}
