import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const MYSQL_DOCKER_HOST = String(process.env.MYSQL_DOCKER_HOST) || ''
const MYSQL_USER = process.env.MYSQL_USER?.trim()
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || ''
const MYSQL_PASSWORD = String(process.env.MYSQL_PASSWORD) || ''
// const MYSQL_DOCKER_PORT = Number(process.env.MYSQL_DOCKER_PORT)
const MYSQL_LOCAL_PORT = Number(process.env.MYSQL_LOCAL_PORT)


if (!MYSQL_DOCKER_HOST || !MYSQL_USER || !MYSQL_DATABASE || !MYSQL_PASSWORD) {
  throw new Error('One or more required environment variables are missing')
}
  
console.log({
  user: MYSQL_USER,
  db: MYSQL_DATABASE,
  db_local_port: MYSQL_LOCAL_PORT,
  // host_Docker: MYSQL_DOCKER_HOST,// 'localhost'
  password: MYSQL_PASSWORD
  // db_docker_port: MYSQL_DOCKER_PORT,
})

export const sequelize = new Sequelize('mysql://localhost:3307/rolling_dices', {
  username: MYSQL_USER,
  password: MYSQL_PASSWORD,
  define:{
    timestamps: false
  }
})
