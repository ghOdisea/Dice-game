import dbPlayer from '../schema/db-player'
import { PlayerRepository } from '../../domain/repository/player.repository'


export class DaoPlayer implements PlayerRepository{

  getAllPlayers(){
    const players = dbPlayer.findAll()
    return players
  }
  createPlayer(){
    const newPlayer = dbPlayer.create()
    return newPlayer
  }
  // updatePlayerbyId(playerId:number){
  //     const updatePlayer = dbPlayer.findByPk(playerId)
  //     if(updatePlayer){
  //         return updatePlayer
  //     }else{
  //         console.log("Player not found")
  //         return undefined
  //     }
  // }
}


