import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('rolling_dices', 'root', 'secret', {
  host: 'db',
  dialect: 'mysql',
  port: 3306,
  define: {
    timestamps: false,
  },
})

sequelize.authenticate()
  .then(()=>{
    console.log('Connection has been established successfully.')
  })
  .catch (error => {
    console.error('Hubo un error!!! ### :', error)
  })