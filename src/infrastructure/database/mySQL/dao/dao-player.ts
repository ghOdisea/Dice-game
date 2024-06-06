import { dbPlayer } from '../schemas/db-player'
import { PlayerRepository } from '../../../../domain/repository/player.repository'
import Player from '../../../../domain/models/player'
import { Model } from 'sequelize'
import { sequelize } from '../config.sequelize'

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

    const totalGamesPlayer = await sequelize.query(`SELECT COUNT(id) FROM game WHERE id_player = ${playerId}`)
    const totalGamesWin  = await sequelize.query(`SELECT COUNT(id) FROM game WHERE id_player = ${playerId} && score = 7`)

    console.log(totalGamesPlayer)
    console.log(totalGamesWin)
    if( score != 7 ){
      await dbPlayer.update({
        totalGames: Number(totalGamesPlayer[0]) 
      },{where: { id: playerId } })
      
    }else if(score === 7){
      await dbPlayer.update({
        victories: Number(totalGamesWin[0]), 
        totalGames: Number(totalGamesPlayer[0]) 
      },{where: { id: playerId } })
      
    }
  }
}


