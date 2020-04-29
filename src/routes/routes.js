import { Router } from 'express'
import { clients } from '../lists/clients'
import { shops } from '../lists/shops'
import { SortNum } from '../generators/generators'

const app = Router()

/**
 * Gerar Pedido Randomico
 */
app.post('/order', (req, res) => {

  const client = clients[SortNum(clients.length)]
  const shop = shops[SortNum(shops.length)]

  // const pedido = new Pedido({
  //   id: GetID(5),
  //   date: moment().unix().toString(),
  //   shop: {
  //     id: shop.id,
  //     label: shop.shopLabel,
  //   },
  //   client: {
  //     id: client.id,
  //     label: client.clientLabel,
  //     address: client.clientAddress
  //   },
  //   status: 'Aberto',
  // })

  res.json({ order: [] })
})

export const AppRouter = app