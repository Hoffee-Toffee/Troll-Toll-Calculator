import connection from './connection'
import { TollCollected } from '../../models/toll-collected'
import { FavouriteBridge } from '../../models/favourite-bridges'

export async function getFavBridgesDb(
  db = connection
): Promise<FavouriteBridge[]> {
  return db('favourite-bridge').select('*')
}
export async function addFavBridgeDb(
  bridge,
  db = connection
): Promise<FavouriteBridge[]> {
  return db('favourite-bridge').insert
}
