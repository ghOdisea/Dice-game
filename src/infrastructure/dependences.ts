import { DaoPlayer } from './dao/dao-player'
import { PlayerService } from '../application/services/player.services'
import { GameService } from '../application/services/game.services'
import { DaoGame } from './dao/dao-game'
import { DaoRanking } from './dao/dao-ranking'
import { RankingService } from '../application/services/ranking.services'

export const daoPlayer = new DaoPlayer()
export const playerServices = new PlayerService(daoPlayer)

export const daoGame = new DaoGame()
export const gameServices = new GameService(daoGame)

export const daoRanking = new DaoRanking()
export const rankingService = new RankingService(daoRanking)