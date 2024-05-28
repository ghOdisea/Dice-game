import { GameRepository } from '../../domain/repository/game.repository'
import Game from '../../domain/models/game'
import { dbGame } from '../schema/db-game'
import { Model } from 'sequelize'

export class DaoGame implements GameRepository{
  createGameByIdPlayer(): Promise<Model<Game>>{
    const newGame = dbGame.create()
    return newGame
  }
  getGamesByPlayerId(playerId:number): Model<Game>{
    const games = dbGame.findAll(
      where:{
        id:playerId
      }
    })

  }
}

