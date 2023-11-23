import connection from './connection'
import { User } from '../../models/users'

export async function getUser(auth0Id: string, db = connection): Promise<User> {
  let user = await db('users').select('id').where('auth0_id', auth0Id).first()
  if (!user) {
    user = await db('users')
      .select('id')
      .insert({ auth0_id: auth0Id, email: '', first_name: '', last_name: '' })
      .first()
  }
  return user
}
