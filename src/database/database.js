import Sequelize from 'sequelize'

export const Database = new Sequelize('postgres://user:pass@0.0.0.0:5432/postgres', {
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
  date: Sequelize.STRING
})

Order.create({
  date: '987'
}).then(row => {
  console.log('order: ', row.id)
})