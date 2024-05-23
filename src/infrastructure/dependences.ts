import { DaoPlayer } from './dao/dao-player'
import { PlayerService } from '../application/services/player.services'


export const daoPlayer = new DaoPlayer()
export const playerServices = new PlayerService(daoPlayer)


