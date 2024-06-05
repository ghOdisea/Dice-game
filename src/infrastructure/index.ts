import { ServerBootStrap } from '../application/server/server'
import { dbConnection } from './database/mySQL/connection-db'

const server = new ServerBootStrap()

server.build()

dbConnection()

