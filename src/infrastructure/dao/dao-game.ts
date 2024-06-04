/* import { GameRepository } from '../../domain/repository/game.repository'
import Game from '../../domain/models/game'
import { dbGame } from '../schema/db-game'
import { Model } from 'sequelize'

export class DaoGame implements GameRepository{
  async createGameByPlayerId(game: Game): Promise<Model<Game>>{
    const newGame = dbGame.create(game)
    return newGame
  }
  async getGamesByPlayerId(playerId:number): Promise<Model<Game>[] | null>{
    const games = dbGame.findAll({ where: { id_player: playerId } })
    return games
  }
  async deleteGamesById(playerId:number): Promise<number>{
    const games = dbGame.destroy({ where: { id_player: playerId } })
    return games
  }
}

 */