import express, { Router } from 'express'
import { RankingRouter } from '../../infrastructure/routes/ranking-router'
import { PlayerRouter } from '../../infrastructure/routes/player-router'
import { GameRouter } from '../../infrastructure/routes/game-router'
import dotenv from 'dotenv'

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your allowed origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true, // Enable credentials (cookies, authorization headers, etc.)
}


dotenv.config()


export class ServerBootStrap {
  
  public app = express()
  
  public PORT = process.env.NODE_DOCKER_PORT

  build (): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.disable('x-powered-by')
    this.app.use(cors(corsOptions))
    this.app.options('*', cors(corsOptions))
    this.app.use('/api', this.routers())
    this.listen()
  }
    
  routers (): Router[] {
    return [
      new PlayerRouter().router,
      new GameRouter().router,
      new RankingRouter().router
    ]
  }
    
  public listen (): void {
    this.app.listen(this.PORT, () => {
      console.log(`Server listening on port => ${this.PORT}`)
    })
  }
}

