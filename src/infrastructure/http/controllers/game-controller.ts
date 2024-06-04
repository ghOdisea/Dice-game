import { Request, Response } from 'express'
import { daoPlayer, gameServices } from '../../dependences'
import { getRandomValue } from '../../schema/utils/randomInt'


export class GameController{

  async createGamebyPlayerId(req: Request, res: Response): Promise<void>{
    const playerID = Number(req.params.id)
    const dice1 = getRandomValue()
    const dice2 = getRandomValue()
    const score = Number(dice1 + dice2)

    const gameNew = {
      id: 0,
      id_player: playerID,
      dice1: dice1,
      dice2: dice2,
      score: score    
    } 
    
    if(!playerID){
      res.status(400).send('Player Id is required')
      
    } else{
      
      try {
        const newGame = await gameServices.createGamebyPlayerId(gameNew)
        daoPlayer.updateScore(playerID,score)
        res.status(201).json(newGame)
        
      } catch (error) {
        res.status(500).send('Something went wrong' + error)
      }
    }
    
  }
  async getGamesByPlayerId(req: Request, res: Response): Promise<void>{
    const playerID = Number(req.params.id)
    const playerGames = await gameServices.getGamesByPlayerId(playerID)
    // console.log(newGame)

    if(playerGames == null){
      res.status(404).send('Player does not exist')
    }else{
      res.status(201).json(playerGames)
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
} */