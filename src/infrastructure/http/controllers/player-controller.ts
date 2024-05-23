import { Request,Response } from 'express'
import { playerServices } from '../../dependences'

export class PlayerController{

  async getAllPlayers(_:Request,res:Response){
    try{
      const players = await playerServices.getAllPlayers()
      return res.status(200).send(players)
    }catch( error ){
      if( error ){
        console.log('Controller check')
        return res.status(404).send()
      }
      return res.status(500).send()
    }
  }
}