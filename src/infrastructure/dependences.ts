import { DaoPlayer } from './database/mySQL/dao/dao-player'
import { PlayerService } from '../application/services/player.services'
import { GameService } from '../application/services/game.services'
<<<<<<< HEAD
import { DaoGame } from './dao/dao-game'
import { DaoRanking } from './dao/dao-ranking'
import { RankingService } from '../application/services/ranking.services'
=======
import { DaoGame } from './database/mySQL/dao/dao-game'
>>>>>>> 8e1c048f398855ecbb0793592aaedd13a025e9d1

export const daoPlayer = new DaoPlayer()
export const playerServices = new PlayerService(daoPlayer)

export const daoGame = new DaoGame()
export const gameServices = new GameService(daoGame)

export const daoRanking = new DaoRanking()
export const rankingService = new RankingService(daoRanking)