import { Sequelize, } from 'sequelize'

export const sequelize = new Sequelize('rolling_dices', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
})

