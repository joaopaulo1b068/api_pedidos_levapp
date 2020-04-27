import express from 'express'
import { Pedido } from './pedido'
import moment from 'moment'
import { clients } from './clients'
import { shops } from './shops'

/**
 * @param {number} max
 * @returns {number} ==> numero entre 0 e max-1 
 */
function SortNum(max) {

  if (typeof max !== 'number')
    return 0

  return Math.floor(Math.random() * max)
}

/**
 * caracteres permitidos no id
 */
const numericChars = [
  '1', '2', '3', '4', '5',
  '6', '7', '8', '9', '0'
]

/**
 * 
 * @param {number} n => tamanho do id 
 */
function GetID(n) {
  if (typeof n !== 'number' || n < 1) n = 1

  const arr = []
  while (arr.length < n) {
    const pos = SortNum(numericChars.length)
    arr.push(numericChars[pos])
  }
  return arr.join('')
}

const PORT = process.env.PORT || 8000
const app = express()

app.get('/random/:n', (req, res) => {

  const n = req.params['n']

  const arr = []
  for (let i = 0; i < n; i++) {

    const hours = SortNum(10)
    const minutes = SortNum(60)
    const days = SortNum(4)

    const client = clients[SortNum(clients.length)]
    const shop = shops[SortNum(shops.length)]

    const pedido = new Pedido({
      id: GetID(5),
      date: moment().subtract({hours, minutes, days}).unix().toString(),
      shopID: shop.id,
      shopLabel: shop.shopLabel,
      status: 'Aberto',
      clientID: client.id,
      clientLabel: client.clientLabel,
      clientAddress: client.clientAddress
    })

    arr.push(pedido)

  }

  res.json(arr)

})

app.listen(PORT, () => {
  console.log('Online on Port: ', PORT)
})