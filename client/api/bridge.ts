import request from 'superagent'
import { Bridge } from '../../models/bridge.ts'

const bridgeURL = '/api/v1/bridges'

export async function getBridgesApi(): Promise<Bridge[]> {
  try {
    const res = await request.get(bridgeURL)
    return res.body
  } catch (error) {
    throw console.error('Error fetching bridges.', error)
  }
}

export async function getSingleBridgeApi(id: number): Promise<Bridge> {
  try {
    const res = await request.get(`${bridgeURL}/${id}`)
    return res.body
  } catch (error) {
    console.error(`Error fetching bridge with id ${id}:`, error)
    throw new Error(`Failed to fetch bridge with id ${id}`)
  }
}
