import Player from "../../domain/models/player";
import { PlayerRepository } from "../../domain/repository/player.repository";

export class PlayerService{
    constructor(private readonly playerRepository: PlayerRepository ){
        this.playerRepository = playerRepository
    }

    async createPlayer(): Promise<Player> {
        const player = this.playerRepository.createPlayer()
        return player
    }

    async updatePlayerbyId(playerID: number): Promise<Player>{
        const player = this.playerRepository.updatePlayerbyId(playerID)
        return player
    }
    async getAllPlayers(): Promise<Array<Player>>{
        const allPlayers = this.playerRepository.getAllPlayers()
        return allPlayers
    }
}