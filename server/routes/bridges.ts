import express from 'express'
import { Bridge } from '../../models/bridge.ts'
import { JwtRequest } from '../auth0.ts'
import * as dbFavBridge from '../db/favourite-bridges.ts'
import * as dbBridge from '../db/bridges.ts'

const router = express.Router()

// -- MVP -- //

// GET /api/v1/bridges
router.get('/', async (req, res) => {
  try {
    const bridges = await dbBridge.getAllBridgesDb()
    res.json(bridges)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

// GET /api/v1/bridges/:id
router.get('/:id', async (req, res) => {
  const bridgeId = Number(req.params.id)
  try {
    const bridge = await dbBridge.getBridgeByIdDb(bridgeId)
    res.json(bridge)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

// -- STRETCH -- //

// GET /api/v1/bridges/fav
router.get('/fav', async (req, res) => {
  try {
    const favBridges = await dbFavBridge.getFavBridgesDb()
    res.json(favBridges)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

// POST /api/v1/bridges/fav
router.post('/fav', async (req, res) => {
  try {
    const bridge = req.body
    const addedBridge = await dbFavBridge.addFavBridgeDb(bridge)
    res.json(addedBridge)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router

//TEST
