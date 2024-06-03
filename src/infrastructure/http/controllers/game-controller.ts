import { Request, Response } from 'express'
import { gameServices } from '../../dependences'


export class GameController{

  async createGamebyPlayerId(req: Request, res: Response): Promise<void>{
    const playerID = req.body.id
    const newGame = await gameServices.createGamebyPlayerId(playerID)
    // console.log(newGame)

    if(newGame == null){
      res.status(404).send('Player does not exist')
    }else{
      res.status(201).send('Good Luck! You just played a game!')
    }
        
  }
  async getGamesByPlayerId(req: Request, res: Response): Promise<void>{
    const playerID = req.body.id
    const allGames = await gameServices.getGamesByPlayerId(playerID)
    // console.log(newGame)

    if(allGames == null){
      res.status(404).send('Player does not exist')
    }else{
      res.status(201).json(allGames)
    }
        
  }

  async deleteGamesbyId(req:Request, res: Response){
    const playerID = req.body.id
    const playerReset = await gameServices.deleteGamesbyId(playerID)
    // console.log(playerReset)

    if(playerReset === null ){
      res.status(404).send('Player does not exist')
    }else{
      res.status(205).json(playerReset)
    }
  } 
}