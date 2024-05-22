import { Game } from "../models/game";
import Player from "../models/player";

export interface GameRepository{
    createGamebyPlayerId: (playerID: number) => Game
    getGames_playerId: (playerID: number) => Array<Game>
    deleteGamesbyId: (playerID: number) => Player
}