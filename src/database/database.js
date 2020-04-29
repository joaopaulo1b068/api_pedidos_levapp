import Sequelize from 'sequelize'
import { clients } from '../lists/clients'
import { shops } from '../lists/shops'

export const Database = new Sequelize(process.env.DATABASE_URL ||
  'postgres://user:pass@0.0.0.0:5432/postgres', {
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Order = Database.define('Order', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  date: Sequelize.STRING,
  status: Sequelize.STRING,
})

const Shop = Database.define('Shop', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  label: Sequelize.STRING,
})

const Client = Database.define('Client', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  label: Sequelize.STRING,
  address: Sequelize.STRING,
})

Client.hasMany(Order, { foreignKey: 'fk_client' })
Shop.hasMany(Order, { foreignKey: 'fk_shop' })

Database.sync({ force: true }).then(() => {

  clients.forEach(item => {
    Client.create({
      id: item.id,
      address: item.clientAddress,
      label: item.clientLabel
    })
  })

  shops.forEach(item => {
    Shop.create({
      id: item.id,
      label: item.shopLabel
    })
  })

})
