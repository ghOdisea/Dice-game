import { DaoPlayer } from './database/mySQL/dao/dao-player'
import { DaoGame } from './database/mySQL/dao/dao-game'

import { PlayerService } from '../application/services/player.services'
import { GameService } from '../application/services/game.services'

import { RankingService } from '../application/services/ranking.services'
import { DaoRanking } from './database/mySQL/dao/dao-ranking'

export const daoPlayer = new DaoPlayer()
export const playerServices = new PlayerService(daoPlayer)

export const daoGame = new DaoGame()
export const gameServices = new GameService(daoGame)

export const daoRanking = new DaoRanking()
export const rankingService = new RankingService(daoRanking)