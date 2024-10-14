import { sequelize } from './config.sequelize'

export const dbConnection = async () => {

  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Hubo un error!!! ### :', error)
  }  
  
  try {
    await sequelize.sync({ alter: true })
    console.log('DB is synchronized')
  } catch (error) {
    console.log('There was a problem synchronizing the database' + error)
  }

}