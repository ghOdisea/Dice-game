import { GameController } from '../controllers/game-controller'
import { BaseRouter } from './router'



export class GameRouter extends BaseRouter<GameController>{
  constructor(){
    super(GameController)
  }

  routes():void{
    this.router.post('/games/:id', (req, res) => {
      void this.controller.createGamebyPlayerId(req, res)
    })
    this.router.get('/games/:id', (_, res) => {
      void this.controller.getGamesByPlayerId(_,res)
    })
    this.router.delete('/games',(req,res)=>{
      void this.controller.deleteGamesbyId(req,res)
    })
  }
}
 