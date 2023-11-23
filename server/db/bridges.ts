import connection from './connection'
import { Bridge } from '../../models/bridge'

export async function getAllBridgesDb(db = connection): Promise<Bridge[]> {
  return db('bridges').select(
    'id',
    ' name',
    ' location',
    ' type',
    ' year_built as yearBuilt',
    ' length_meters as lengthMeters',
    ' lanes',
    ' added_by_user as addByUser',
    ' toll_charge as tollCharge',
    'image_url as imageUrl'
  )
}

export async function getBridgeByIdDb(
  id: number,
  db = connection
): Promise<Bridge> {
  return db('bridges')
    .select(
      'id',
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
    .where('id', id)
    .first()
}
