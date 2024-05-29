import { Request,Response } from 'express'
import { playerServices } from '../../dependences'


export class PlayerController{

  async getAllPlayers(_:Request,res:Response): Promise<void>{

    const players = await playerServices.getAllPlayers()
    // console.log(players)
    if(players === undefined){
      res.status(404).send('players not found')
    }
    res.status(200).send(players)
  }
  // async newPlayer(req:Request,res:Response): Promise <void>{
  //   const player = await playerServices.createPlayer(req)
  //   if(player){
  //     res.status(404).send('user exists')
  //   }
  //   res.status(200).send(player)
  // }

}