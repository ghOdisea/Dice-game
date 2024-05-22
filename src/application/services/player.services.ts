import { Model } from "sequelize";
import Player from "../../domain/models/player";
import { PlayerRepository } from "../../domain/repository/player.repository";

export class PlayerService{
    constructor(private readonly playerRepository: PlayerRepository ){
        this.playerRepository = playerRepository
    }
    
    async getAllPlayers(): Promise<Model<Player>[]>{
        const allPlayers = this.playerRepository.getAllPlayers()
        return allPlayers
    }
    async createPlayer(): Promise<Model<Player>> {
        const player = this.playerRepository.createPlayer()
        return player
    }
    // async updatePlayerbyId(playerID: number): Promise<Model<Player> | undefined>{
    //     const player = this.playerRepository.updatePlayerbyId(playerID)
    //     return player
    // }
}