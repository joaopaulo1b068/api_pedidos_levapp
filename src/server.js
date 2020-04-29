require('dotenv').config()

import express from 'express'
import { Pedido } from './pedido'
import moment from 'moment'
import { clients } from './lists/clients'
import { shops } from './lists/shops'
import { Database } from './database/database'
import { AppRouter } from './routes/routes'

Database
  .authenticate()
  .catch(err => {
    console.error('ERROR ON DATABASE CONN', err);
  })

const app = express()
app.use(AppRouter)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log('Online on Port: ', PORT)
})