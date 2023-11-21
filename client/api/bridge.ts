import request from 'superagent'
import { Bridge } from '../../models/bridge.ts'

const bridgeURL = '/api/v1/bridges'

export async function getBridgesApi(): Promise<Bridge[]> {
  const res = await request.get(bridgeURL)
  return res.body
}

export async function getBridgeApi(id: number): Promise<Bridge> {
  const res = await request.get(`${bridgeURL}/${id}`)
  return res.body
}