import { sequelize } from './sequelize'

export const dbConnection = () => {
  sequelize.sync({alter: true})
}