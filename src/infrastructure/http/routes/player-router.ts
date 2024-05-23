import { PlayerController } from '../controllers/player-controller'
import { BaseRouter } from './router'


// playerRouter.get('/players', playerControllers.getAllUsers)
export class PlayerRouter extends BaseRouter<PlayerController>{
  constructor(){
    super(PlayerController)
  }

  routes(){
    this.router.get('/players', (_, res) => {
      console.log('Router check')
      void this.controller.getAllPlayers(_, res)
    })
  }
}
