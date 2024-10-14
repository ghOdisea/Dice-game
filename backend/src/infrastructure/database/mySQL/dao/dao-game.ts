import { GameRepository } from '../../../../domain/repository/game.repository'
import Game from '../../../../domain/models/game'
import { dbGame } from '../schemas/db-game'
import { Model } from 'sequelize'
import { dbPlayer } from '../schemas/db-player'

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
    const deletedGames = dbGame.destroy({ where: { id_player: playerId } })

    return deletedGames
  }
  async updateGames(playerId: number): Promise<void>{
    const resetPlayer = await dbPlayer.findOne({where: { id: playerId } })
    
    
    if(resetPlayer != null){
      const winsCount = resetPlayer.dataValues.victories
      const gamesCount = resetPlayer.dataValues.totalGames

      await resetPlayer.update({
        victories: winsCount - winsCount,
        totalGames: gamesCount - gamesCount
      },{where: { id: playerId } })
    }
  }
}