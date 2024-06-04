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
  async getPlayerById(req:Request,res:Response): Promise<void>{
    const {
      params: {playerId},
    } = req
    if(!playerId){
      res
        .status(400)
        .send({
          status: 'FAILED',
          data: {error: 'Parameter ":playerId" can not be empty'},
        })
    }else{
      try{
        const player = await playerServices.getPlayer(+playerId)
        res.send({status: 'OK',data: player})
      }catch (error:any){
        res
          .status(error?.status || 500)
          .send({status: 'FAILED',data: {error: error?.message || error} })
      }
    }
  }

  async newPlayer(req:Request,res:Response): Promise <void>{
    const newName = req.body
    const player = await playerServices.createPlayer(newName)
    if(!player){
      res.status(404).send('user exists')
    }
    res.status(201).send(player)
  }

  async updatePlayer(req: Request, res: Response): Promise<void>{
    const {
      params: {playerId},
    } = req
    if(!playerId){
      res
        .status(400)
        .send({
          status:'FAILED',
          DATA: {eror:'Parameter ":userId" can not be empty'},
        })
    }else{
      try{
        const playerUpdate = await playerServices.updatePlayerbyId(+playerId,req.body.name)
        res.status(202).send(playerId+' has changed to '+playerUpdate)
      }catch(error:any){
        res
          .status(error?.status || 500)
          .send({status: 'FAILED',data: {error: error?.message || error} })
      }
    }
  }
}
