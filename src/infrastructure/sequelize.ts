import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('rolling_dices', 'root', 'secret', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
})

sequelize.authenticate()

sequelize.authenticate()
  .then(()=>{
    console.log('Connection has been established successfully.')
  })
  .catch (error => {
    console.error('Hubo un error!!! ### :', error)
  })