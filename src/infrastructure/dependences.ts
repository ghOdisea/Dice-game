import { DaoPlayer } from './dao/dao-player'
import { PlayerService } from '../application/services/player.services'
import { PlayerController } from './http/controllers/player-controller'


export const daoPlayer = new DaoPlayer()
export const playerServices = new PlayerService(daoPlayer)
export const playerControllers = new PlayerController(playerServices)