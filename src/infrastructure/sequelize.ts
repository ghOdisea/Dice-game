import { Sequelize, } from 'sequelize'

export const sequelize = new Sequelize('rolling_dices', 'root', 'passprueba', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
})

