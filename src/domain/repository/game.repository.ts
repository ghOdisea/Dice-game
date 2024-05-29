import Game from '../models/game'
import Player from '../models/player'
import { Model } from 'sequelize'
export interface GameRepository{
    createGamebyPlayerId: () =>Promise<Model<Game>>
    getGamesByPlayerId: (playerID: number) => Array<Game>
    deleteGamesbyId: (playerID: number) => Player
}