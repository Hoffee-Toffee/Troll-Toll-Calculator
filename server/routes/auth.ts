import express from 'express'

import * as db from '../db/users.ts'
import checkJwt, { JwtRequest } from '../auth0.ts'

const router = express.Router()

// GET /api/v1/auth
router.get('/', checkJwt, async (req: JwtRequest, res) => {
  const auth0Id = req.auth?.sub
  console.log('This is the auth0Id?: ', auth0Id)
  if (!auth0Id) {
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }

  try {
    const user = await db.getUser(auth0Id)
    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router
