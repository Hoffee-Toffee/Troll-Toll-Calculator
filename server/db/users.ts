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

export async function getActiveBridge(userId: number, db = connection) {
  //get user with ID
  //use userId to join to fav bridge

  return db('bridges')
    .select(
      'bridges.id as id',
      ' name',
      ' location',
      ' type',
      '  year_built as yearBuilt',
      ' length_meters as lengthMeters',
      ' lanes',
      ' added_by_user as addByUser',
      ' toll_charge as tollCharge',
      'image_url as imageUrl'
    )
    .join('users', 'users.active_bridge_id', 'bridges.id')
    .where('users.id', userId)
    .first()
}
