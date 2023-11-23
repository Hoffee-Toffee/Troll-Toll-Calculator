import express from 'express'

import * as db from '../db/users.ts'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { AuthUser } from '../../models/users.ts'

const router = express.Router()

// POST /api/v1/auth
router.post('/', checkJwt, async (req: JwtRequest, res) => {
  const body = Object.keys(req.body)[0]
  const authUser: AuthUser = JSON.parse(body)

  const auth0Id = req.auth?.sub
  if (!auth0Id) {
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }

  try {
    const user = await db.getUser(authUser)
    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

// Get active bridge route

// GET /api/v1/auth/:id/active

router.get('/:id/active', async (req, res) => {
  const userId = Number(req.params.id)
  try {
    const activeBridge = await db.getActiveBridge(userId)
    res.json(activeBridge)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router
