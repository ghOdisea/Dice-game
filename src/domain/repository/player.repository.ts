import Player from "../models/player";

export interface PlayerRepository{
    createPlayer: () => Player
    updatePlayerbyId: (playerID: number) => Player
    getAllPlayers: () => Array<Player>
}