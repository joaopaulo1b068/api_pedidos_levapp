import { Pedido } from './pedido'

const pedido = new Pedido({ date: '', id: '2' })

function SortNum(max) {
  if (typeof max !== 'number' || max < 1) max = 1
  return Math.floor(Math.random() * max)
}

const allow = [
  '1', '2', '3', '4', '5',
  '6', '7', '8', '9', '0'
]

function GetID(n) {
  if (typeof n !== 'number' || n < 1) n = 1

  const arr = []
  while (arr.length < n) {
    const pos = SortNum(allow.length)
    arr.push(allow[pos])
  }
  return arr.join('')

}

const write = []

for (let i = 0; i < 10; i++) {
  write.push(GetID(5))
}

// fs = require('fs')
// fs.writeFile('data.json', JSON.stringify(pedido), function (err) {
//   if (err) return console.log(err)
//   console.log('data.json criado com sucesso')
// })
