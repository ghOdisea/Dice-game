import express, { Router } from 'express'
import { RankingRouter } from '../../infrastructure/routes/ranking-router'
import { PlayerRouter } from '../../infrastructure/routes/player-router'
import { GameRouter } from '../../infrastructure/routes/game-router'

export class ServerBootStrap {
  
  public app = express()
  public PORT : string | number = process.env.PORT ?? 3000

  build (): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.disable('x-powered-by')
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

