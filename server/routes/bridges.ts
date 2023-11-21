import express from 'express'
import { Bridge } from '../../models/bridge.ts'
import { JwtRequest } from '../auth0.ts'

import * as db from '../db/bridges.ts'

const router = express.Router()

// GET /api/v1/bridges
router.get('/', async (req, res) => {
  try {
    const bridges = await db.getBridges()

    res.json(bridges)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router

//TEST
