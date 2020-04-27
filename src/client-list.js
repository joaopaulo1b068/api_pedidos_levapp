function SortNum(max) {
  if (typeof max !== 'number') return 0
  return Math.floor(Math.random() * max)
}

const nums = [
  '1', '2', '3', '4',
  '5', '6', '7', '8',
  '9', '0'
]

const distNames = [
  'Centro',
  'Chacara Sasaki',
  'Jardim Sinuelo',
  'Jardim Imperial',
  'Parque Industrial',
  'Nova America',
  'Vila Olivia',
  'Vila Samuel',
  'Vila Zanin',
  'Icara'
]

const addressNames = [
  'Rua Beija Flor, 12',
  'Rua Andorinha, 55',
  'Rua Rouxinol, 77',
  'Rua Pará, 82',
  'Rua Caiobá, 54',
  'Rua Platina, 78',
  'Rua Tiete, 65',
  'Rua Espirito Santo, 23',
  'Rua Minas Gerais, 57',
  'Rua José Abraao, 51'
]

const labelNames = [
  'Maria Souza',
  'Luis Ferreira',
  'Claudia Costa',
  'Joao dos Santos',
  'José Gomes',
  'Bruna Silva',
  'Adriana Almeida',
  'Ana Rodrigues',
  'Francisco Nascimento',
  'Pedro Araujo'
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

const clients = labelNames.map( (name, i) => {
  return {
    clientID: GetID(5),
    clientLabel: name,
    clientDist: distNames[i],
    clientAddress: addressNames[i]
  }
})

const fs = require('fs')
const path = require('path')

fs.writeFile(path.join(__dirname, 'clients.json'), JSON.stringify(clients), function (err) {
  if (err) return console.log(err)
  console.log('clients.json criado com sucesso')
})
