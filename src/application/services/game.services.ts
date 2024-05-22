import { Game } from "../../domain/models/game";
import Player from "../../domain/models/player";
import { GameRepository } from "../../domain/repository/game.repository";

export class GameService{
    constructor(private readonly gameRepository: GameRepository){
        this.gameRepository = gameRepository
    }

    async createGamebyPlayerId(playerID: number): Promise<Game>{
        const game = this.gameRepository.createGamebyPlayerId(playerID)
        return game
    }

    async getGames_playerId(playerID: number): Promise<Array<Game>>{
        const games = this.gameRepository.getGames_playerId(playerID)
        return games
    }

    async deleteGamesbyId(playerID: number): Promise<Player>{
        const deletedGames = this.gameRepository.deleteGamesbyId(playerID)
        return deletedGames
        // Intencion de que devuelva el jugador con el numero de partidas en cero.
    }

}