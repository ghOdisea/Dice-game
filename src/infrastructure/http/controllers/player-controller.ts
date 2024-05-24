import { Request,Response } from 'express'
import { playerServices } from '../../dependences'


export class PlayerController{

  async getAllPlayers(_:Request,res:Response): Promise<void>{

    const players = await playerServices.getAllPlayers()
    console.log(players)
    if(players === undefined){
      res.status(404).send('players not found')
    }
    res.status(200).send(players)
  }
}