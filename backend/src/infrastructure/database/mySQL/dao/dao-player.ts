import { dbPlayer } from '../schemas/db-player'
import { PlayerRepository } from '../../../../domain/repository/player.repository'
import Player from '../../../../domain/models/player'
import { Model } from 'sequelize'
import { sequelize } from '../config.sequelize'
import { dbGame } from '../schemas/db-game'

export class DaoPlayer implements PlayerRepository{

  async getAllPlayers(): Promise<Model<Player>[] | null>{
    const players = await dbPlayer.findAll()
    return players
  }
  async getPlayerById(playerId:number): Promise<Model<Player>| null>{
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
  async updateScore(playerId:number, score: number): Promise<void>{
    
    const updatePlayer = await dbPlayer.findOne({where: { id: playerId } })
    
    if(updatePlayer != null){
      const gamesCount = updatePlayer.dataValues.totalGames
      const winsCount = updatePlayer.dataValues.victories
      
      if( score != 7 ){
        await dbPlayer.update({
          totalGames: gamesCount + 1
        },{where: { id: playerId } })
        
      }else if(score === 7){
        await dbPlayer.update({
          victories: winsCount + 1, 
          totalGames: gamesCount + 1 
        },{where: { id: playerId } })
        
      }
    }
  }
}


