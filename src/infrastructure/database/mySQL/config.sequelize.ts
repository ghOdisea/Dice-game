import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const MYSQL_DOCKER_HOST = String(process.env.MYSQL_DOCKER_HOST) || ''
const MYSQL_USER = process.env.MYSQL_USER?.trim()
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || ''
const MYSQL_PASSWORD = String(process.env.MYSQL_PASSWORD) || ''
const MYSQL_DOCKER_PORT = Number(process.env.MYSQL_DOCKER_PORT)

console.log({
  host: MYSQL_DOCKER_HOST,// 'localhost'
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  db: MYSQL_DATABASE
})

if (!MYSQL_DOCKER_HOST || !MYSQL_USER || !MYSQL_DATABASE || !MYSQL_PASSWORD) {
  throw new Error('One or more required environment variables are missing')
}


export const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {  //'123456'
  host: MYSQL_DOCKER_HOST, // 'localhost'
  dialect: 'mysql',
  port: MYSQL_DOCKER_PORT,
  define: {
    timestamps: false,
  },
})
