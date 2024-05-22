import { Model } from "sequelize";
import Player from "../models/player";

export interface PlayerRepository{
    getAllPlayers: () => Promise<Model<Player>[] >
    createPlayer: () => Promise<Model<Player>>
    // updatePlayerbyId: (playerID: number) => Promise<Model<Player> | undefined>
}