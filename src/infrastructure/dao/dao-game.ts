import { GameRepository } from '../../domain/repository/game.repository'
import Game from '../../domain/models/game'
import { dbGame } from '../schema/db-game'
import { Model } from 'sequelize'

export class DaoGame implements GameRepository{
  createGameByPlayerId(): Promise<Model<Game>>{
    const newGame = dbGame.create()
    return newGame
  }
  async getGamesByPlayerId(playerId:number): Promise<Model<Game>[] | null>{
    const games = dbGame.findAll({ where: { title: playerId } })
    return games
  }
  async deleteGamesById(playerId:number): Promise<number>{
    const games = dbGame.destroy({ where: { title: playerId } })
    return games
  }
}

