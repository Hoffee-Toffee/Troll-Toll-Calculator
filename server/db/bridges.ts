import connection from './connection'
import { Bridge } from '../../models/bridge'

export async function getAllBridgesDb(db = connection): Promise<Bridge[]> {
  return db('bridges').select('*')
}
