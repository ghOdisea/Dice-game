import { dbPlayer } from '../schema/db-player'
import { PlayerRepository } from '../../domain/repository/player.repository'
import Player from '../../domain/models/player'
import { Model } from 'sequelize'

export class DaoPlayer implements PlayerRepository{

  async getAllPlayers(): Promise<Model<Player>[] | null>{
    const players = dbPlayer.findAll()
    return players
  }
  createPlayer(player:Player):Promise<Model<Player>>{
    const newPlayer = dbPlayer.create(player)
    return newPlayer
  }
  updatePlayerbyId(playerId:number): Promise<Model<Player>|null> {
    const updatePlayer = dbPlayer.findOne({ where: { id: playerId } })
    if(!updatePlayer){
      // console.log('Player not found')
    }
    return updatePlayer
  }
}


