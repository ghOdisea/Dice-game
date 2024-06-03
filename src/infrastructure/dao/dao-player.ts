import { dbPlayer } from '../schema/db-player'
import { PlayerRepository } from '../../domain/repository/player.repository'
import Player from '../../domain/models/player'
import { Model } from 'sequelize'

export class DaoPlayer implements PlayerRepository{

  async getAllPlayers(): Promise<Model<Player>[] | null>{
    const players = await dbPlayer.findAll()
    return players
  }
  async getPlayerById(playerId:number): Promise<Model<Player> | null>{
    const player = await dbPlayer.findOne({ where: { id: playerId } })
    return player
  }
  async createPlayer(player:Player):Promise<Model<Player>>{
    const newPlayer = await dbPlayer.create(player)
    return newPlayer
  }
  async updatePlayerbyId(playerId:number,changes:any): Promise<number>{
    const updatePlayer = await dbPlayer.update({ name: changes},{where: { id: playerId } })
    return +updatePlayer
  }
}


