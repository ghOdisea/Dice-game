import { dbPlayer } from '../schema/db-player'
import { PlayerRepository } from '../../domain/repository/player.repository'
import Player from '../../domain/models/player'
import { Model } from 'sequelize'

export class DaoPlayer implements PlayerRepository{

  async getAllPlayers(): Promise<Model<Player>[] | null>{
    const players = dbPlayer.findAll()
    return players
  }
  createPlayer(){
    const newPlayer = dbPlayer.create()
    return newPlayer
  }
  updatePlayerbyId(playerId:number): Promise<Model<Player> | null{
  const updatePlayer = dbPlayer.findByPk(playerId)
    if(!updatePlayer){
      console.log("Player not found")
    }
    return updatePlayer
  }
}



