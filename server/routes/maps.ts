import express from 'express'
import * as dbBridge from '../db/bridges.ts'
import request from 'superagent'

const router = express.Router()

router.get('/:id', async (req, res) => {
  function convertStringToLatLong(str: string) {
    const parts = str.split(',')
    if (parts.length === 2) {
      return {
        lat: parseFloat(parts[0]),
        long: parseFloat(parts[1]),
      }
    } else {
      throw new Error('Input string is not in the correct format')
    }
  }

  // Want to return an object, with a value between 1 and 100 with an estimate on how much money this bridge would make in comparrison to other bridges, this will be a rough guide.
  // we want the live 'business' of this, relative to itself
  // We want to calculate this, based on lanes +

  const bridge = await dbBridge.getBridgeByIdDb(Number(req.params.id))

  console.log(bridge)

  console.log(bridge.origin as string)
  console.log(bridge.destination as string)

  const origin = convertStringToLatLong(bridge.origin as string)
  const destination = convertStringToLatLong(bridge.destination as string)

  const bodyData = {
    origin: {
      location: {
        latLng: {
          latitude: origin.lat,
          longitude: origin.long,
        },
      },
    },
    destination: {
      location: {
        latLng: {
          latitude: destination.lat,
          longitude: destination.long,
        },
      },
    },
    travelMode: 'DRIVE',
    routingPreference: 'TRAFFIC_AWARE',
    computeAlternativeRoutes: false,
    routeModifiers: {
      avoidTolls: false,
      avoidHighways: false,
      avoidFerries: false,
    },
    languageCode: 'en-US',
    units: 'IMPERIAL',
  }

  const response = await request
    .post('https://routes.googleapis.com/directions/v2:computeRoutes')
    .set('Content-Type', 'application/json')
    .set('X-Goog-Api-Key', 'AIzaSyC1cT-42Of0KFtbaYlwA3lPjtki0E9xFzM')
    .set('X-Goog-FieldMask', 'routes.distanceMeters,routes.duration')
    .send(bodyData)

  res.send(response)

  if (bridge.lanes) {
    // Do calculation
  }

  const returnObj = {
    generalBusyness: bridge.busyness,
  }
})

export default router
