import express, { Router } from 'express'
<<<<<<< HEAD
import { PlayerRouter } from '../../infrastructure/http/routes/player-router'
import { GameRouter } from '../../infrastructure/http/routes/game-router'
import { RankingRouter } from '../../infrastructure/http/routes/ranking-router'
=======
import { PlayerRouter } from '../../infrastructure/routes/player-router'
import { GameRouter } from '../../infrastructure/routes/game-router'
>>>>>>> 8e1c048f398855ecbb0793592aaedd13a025e9d1

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

