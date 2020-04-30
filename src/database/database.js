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

export const Order = Database.define('_order', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  date: Sequelize.STRING,
  status: Sequelize.STRING,
}, { freezeTableName: true })

export const Shop = Database.define('shop', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  label: Sequelize.STRING,
}, {freezeTableName: true})

export const Client = Database.define('client', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  label: Sequelize.STRING,
  address: Sequelize.STRING,
}, {freezeTableName: true})

Client.hasMany(Order, { foreignKey: 'fk_client' })
Shop.hasMany(Order, { foreignKey: 'fk_shop' })

Database.sync().then(() => {

  clients.forEach( async item => {

    const results = await Client.findAll({
      where: {id: item.id}
    })

    if (!results.length) {
      await Client.create({
          id: item.id,
          address: item.clientAddress,
          label: item.clientLabel        
      })
    }
    
  })

  shops.forEach( async item => {

    const results = await Shop.findAll({
      where: {id: item.id}
    })

    if (!results.length) {
      await Shop.create({
          id: item.id,
          label: item.shopLabel
      })
    }
    
  })

})
