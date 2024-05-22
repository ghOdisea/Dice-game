import { Model } from "sequelize";
import Player from "../models/player";

export interface PlayerRepository{
    createPlayer: () => Player
    updatePlayerbyId: (playerID: number) => Player
    getAllPlayers: () => Promise<Model<Player>[] >
}