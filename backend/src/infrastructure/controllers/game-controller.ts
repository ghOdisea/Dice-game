import { Request, Response } from 'express'
import { daoGame, daoPlayer, gameServices } from '../dependences'
import { getRandomValue } from '../utils/randomInt'


export class GameController{
  
  // Crear nuevo juego por ID de jugador      POST /api/games/:id
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
        await daoPlayer.updateScore(playerID,score)
        res.status(201).json(newGame)
        
      } catch (error) {
        res.status(500).send('Something went wrong. My bad...' + error)
      }
    }
    
  }
  // Listar juegos por ID de jugador      GET /api/games/:id
  async getGamesByPlayerId(req: Request, res: Response): Promise<void>{
    const playerID = Number(req.params.id)
    const playerGames = await gameServices.getGamesByPlayerId(playerID)

    if(playerGames == null){
      res.status(404).send('Player does not exist')
    }else{
      res.status(201).json(playerGames)
    }
        
  }

  async deleteGamesbyId(req:Request, res: Response){
    const playerID = Number(req.params.id)
    const deletedGames = await gameServices.deleteGamesbyId(playerID)

    if(deletedGames === null || deletedGames === undefined){
      res.status(404).send('Player does not exist')
    }else{
      const update = await daoGame.updateGames(playerID)
      res.status(200).send('There is ' + deletedGames +' game eliminated total games = '+update )
    }
  } 
}