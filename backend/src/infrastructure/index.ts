import { dbConnection } from './database/mySQL/connection.sequelize'
import { server } from './dependences'


server.build()

dbConnection()

