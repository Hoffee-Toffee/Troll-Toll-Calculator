import express from 'express'

import * as db from '../db/bridges.ts'
import checkJwt, { JwtRequest } from '../auth0.ts'

const router = express.Router()

// GET /api/v1/auth
router.get('/', checkJwt, async (req: JwtRequest, res) => {
  console.log(req.auth)

  const auth0Id = req.auth?.sub
  if (!auth0Id) {
    // console.log(req)
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }

  try {
    const bridges = await db.getBridges()

    res.json(bridges)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router
