import Game from '../models/game'
import Player from '../models/player'
import { Model } from 'sequelize'

export interface GameRepository{
    createGamebyPlayerId: (playerID: number) => Promise< Model< Game > >
    getGamesByPlayerId: (playerID: number) => Promise< Model< Game >[] >
    deleteGamesbyId: (playerID: number) => Player
}