import connection from './connection.ts'
import {Bridge} from '../../models/bridge.ts'



export async function getBridges(db = connection): Promise<Bridge[]> {
  return db('bridges')
    .select('*')
}

