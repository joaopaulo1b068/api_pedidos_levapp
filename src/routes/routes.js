import { Router } from 'express'
import { clients } from '../lists/clients'
import { shops } from '../lists/shops'
import { SortNum, GetID } from '../generators/generators'
import { Database, Order } from '../database/database'
import moment from 'moment'

const app = Router()

/**
 * Gerar Pedido Randomico
 */
app.post('/order', (req, res) => {

  const client = clients[SortNum(clients.length)]
  const shop = shops[SortNum(shops.length)]

  Order.create({
    id: GetID(5),
    fk_client: client.id,
    fk_shop: shop.id,
    date: moment().unix().toString(),
    status: 'ABERTO'
  })
    .then(resp => {
      res.json(resp)
    })
    .catch(err => res.status(500).send(err))
})

/**
 * Lista Completa de Pedidos
 */
app.get('/order', (req, res) => {

  Database
    .query(`SELECT 
      o.id, o.date, o.status,
      s.id as sh_id, s.label as sh_label,
      c.id as cl_id, c.label as cl_label,
      c.address as cl_address
      FROM _order o 
      JOIN shop s ON o.fk_shop = s.id
      JOIN client c ON o.fk_client = c.id`)
    .then( ([data]) => {
      res.json(data) 
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

/**
 * Pesquisa de Pedido por ID
 */
app.get('/order/:id', (req, res) => {

  Database
    .query(`SELECT 
      o.id, o.date, o.status,
      s.id as sh_id, s.label as sh_label,
      c.id as cl_id, c.label as cl_label,
      c.address as cl_address
      FROM _order o 
      JOIN shop s ON o.fk_shop = s.id
      JOIN client c ON o.fk_client = c.id
      WHERE o.id = '${req.params.id}'`)
    .then( ([data]) => {
      res.json(data) 
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

app.patch('/order/:id', (req, res) => {
  
  const _status = ['ABERTO', 'RETIRADA', 'ENTREGA', 'CONCLUIDO']
  const id = req.params['id']
  const status = req.body['status']

  console.log(status)
  if (status.indexOf(status) < 0){
    return res.status(400).send('provide new STATUS on body')
  }

  Database
    .query(`UPDATE _order SET status = '${status}' WHERE id = '${id}'`)
    .then(resp => res.json(resp))
    .catch(err => res.status(500).json(err))

})

export const AppRouter = app