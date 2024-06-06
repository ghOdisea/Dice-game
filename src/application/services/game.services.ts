import { Model } from 'sequelize'
import Game from '../../domain/models/game'
import { GameRepository } from '../../domain/repository/game.repository'

export class GameService{
  constructor(private readonly gameRepository: GameRepository){
    this.gameRepository = gameRepository
  }

  async createGamebyPlayerId(game: Game): Promise<Model<Game>>{
    const newGame = this.gameRepository.createGameByPlayerId(game)
    return newGame
  }

  async getGamesByPlayerId(playerID: number): Promise<Model<Game>[] | null>{
    const games = this.gameRepository.getGamesByPlayerId(playerID)
    return games
  }

  async deleteGamesbyId(playerID: number): Promise<number>{
    const deletedGames = this.gameRepository.deleteGamesById(playerID)
    return deletedGames
    // Intencion de que devuelva el jugador con el numero de partidas en cero.
  }

}