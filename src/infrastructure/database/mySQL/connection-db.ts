import { sequelize } from './sequelize'

export const dbConnection = () => {
  try {
    sequelize.sync({ alter: true })
    console.log()
  } catch (error) {
    console.log('There was a problem synchronizing the database' + error)
  }

}