import connection from './connection'
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
  try {
    return db('favourite-bridge').insert(bridge)
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}
