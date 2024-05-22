import { Sequelize, } from 'sequelize'

export const sequelize = new Sequelize('jocdaus', 'root', 'passprueba', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
})

