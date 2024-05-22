import { Request,Response } from 'express'
import { PlayerService } from '../../../application/services/player.services'


export class PlayerController{
  constructor(private readonly playerServices: PlayerService){
    this.playerServices = playerServices
  }

  async getAllUsers(_:Request,res:Response){
    try{
      const players = await this.playerServices.getAllPlayers()

      return res.status(200).send(players)
    }catch( error ){
      if( error ){
        return res.status(404).send()
      }
      return res.status(500).send()
    }
  }
}