import express from 'express'
import { Database } from './database/database'
import { AppRouter } from './routes/routes'

export function ENV (key) {
  return process.env[key]
}

Database
  .authenticate()
  .catch(err => {
    console.error('ERROR ON DATABASE CONN');
  })

const app = express()

const _parser = require('body-parser')
const parser = _parser.json()

app.use(parser)
app.use(AppRouter)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log('Online on Port: ', PORT)
})