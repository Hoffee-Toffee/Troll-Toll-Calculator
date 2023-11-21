import express from 'express'
import { Bridge } from '../../models/bridge.ts'
import { JwtRequest } from '../auth0.ts'

import * as db from '../db/bridges.ts'

const router = express.Router()

// -- MVP -- //

// GET /api/v1/bridges
router.get('/', async (req, res) => {
  try {
    const bridges = await db.getAllBridgesDb()
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
    const bridge = await db.getAllBridgesDb(bridgeId)
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
    const favBridges = await db.getFavBridgesDb()
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
    const addedBridge = await db.addFavBridgeDb(bridge)
    res.json(addedBridge)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router
