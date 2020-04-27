function SortNum(max) {
  if (typeof max !== 'number') return 0
  return Math.floor(Math.random() * max)
}

const nums = [
  '1', '2', '3', '4',
  '5', '6', '7', '8',
  '9', '0'
]

const shopNames = [
  'Dogao na Hora',
  'Doce Sabor',
  'Mister Lanches',
  'Comes e Bebes',
  'O Chapeiro',
  'Barraca do Hamburger',
  'Parada do Lanche',
  'Estação do Hamburger',
  'Sabor e Cia',
  'Tropical Lanches'
]

function GetID(n) {
  if (typeof n !== 'number' || n < 1) n = 1

  let result = ''
  while (result.length < n) {
    const pos = SortNum(nums.length)
    result += nums[pos]
  }
  return result

}

const shops = shopNames.map(name => {
  return {
    shopLabel: name,
    id: GetID(5),
  }
})

const fs = require('fs')
const path = require('path')

fs.writeFile( path.join(__dirname, 'shops.json'), JSON.stringify(shops), function (err) {
  if (err) return console.log(err)
  console.log('shops.json criado com sucesso')
})
