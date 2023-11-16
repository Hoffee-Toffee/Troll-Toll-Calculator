import express from 'express'
import * as Path from 'node:path'
import * as URL from 'node:url'

import bridgeRoutes from './routes/bridges.ts'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.json())
server.use(express.static(Path.join(__dirname, 'public')))

server.use('/api/v1/bridges', bridgeRoutes)

server.get('*', (req, res) => {
  res.sendFile(Path.join(__dirname, 'public/index.html'))
})

export default server
