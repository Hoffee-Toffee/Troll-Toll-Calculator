import connection from './connection'
import { FavouriteBridge } from '../../models/favourite-bridges'

export async function getFavBridgesDb(
  db = connection
): Promise<FavouriteBridge[]> {
  console.log('Working!')
  return db('favourite-bridges').select('*')
}

export async function addFavBridgeDb(
  favBridge: number,
  db = connection
): Promise<FavouriteBridge[]> {
  try {
    return db('favourite-bridges').insert(favBridge)
  } catch (error: any) {
    console.log(error.message)
    return error.message
  }
}
