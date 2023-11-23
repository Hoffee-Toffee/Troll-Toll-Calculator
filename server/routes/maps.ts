import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  // Want to return an object, with a value between 1 and 100 with an estimate on how much money this bridge would make in comparrison to other bridges, this will be a rough guide.
  // we want the live 'business' of this, relative to itself
  // We want to calculate this, based on lanes +
})

export default router

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
