import request from 'superagent'
import { Bridge } from '../models/bridge.ts'

const rootUrl = '/api/v1'


export async function getBridges(): Promise<Bridge[]> {
  return request
    .get(`${rootUrl}/bridges`)
    .then((res) => res.body.fruits)
    .catch('error')
}
