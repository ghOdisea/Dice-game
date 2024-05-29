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
  async newPlayer(req:Request,res:Response): Promise <void>{
    const player = await playerServices.createPlayer(req.body)
    if(player){
      res.status(404).send('user exists')
    }
    res.status(200).send(player)
  }
  async updatePlayer(req: Request, res: Response): Promise<void>{
    const newPlayerName= req.body.name
    const playerUpdate = await playerServices.updatePlayerbyId(newPlayerName)
    if(!playerUpdate){
      console.log('player doesn\'t exist')
      res.status(404).send('user not exist')
    }
    res.status(202).send(playerUpdate+' has changed to '+newPlayerName)
  }
}