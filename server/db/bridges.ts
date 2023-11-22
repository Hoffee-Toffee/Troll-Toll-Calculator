import connection from './connection'
import { Bridge } from '../../models/bridge'

export async function getAllBridgesDb(db = connection): Promise<Bridge[]> {
  return db('bridges').select('*')
}

export async function getBridgeByIdDb(id, db = connection): Promise<Bridge[]> {
  return db('bridges').select('*').where('id', id).first()
}
