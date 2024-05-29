import Game from '../models/game'
import { Model } from 'sequelize'

export interface GameRepository{
    createGameByPlayerId: (playerID:number) =>Promise<Model<Game>>
    getGamesByPlayerId: (playerID: number) => Promise<Model<Game>[] | null>
    deleteGamesById: (playerID: number) => Promise<number>
}