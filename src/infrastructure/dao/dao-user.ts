import Player from '../schema/db-user'
import { PlayerRepository } from '../../domain/repository/player.repository'


export class InMemoryRepoPlayer implements PlayerRepository{

    getAllPlayers(){
        const players = Player.findAll()
        return players
    }
    createPlayer(){
        
    }
    updatePlayerbyId(playerId:number){

    }
}


