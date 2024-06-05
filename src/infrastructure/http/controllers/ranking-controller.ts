import { rankingService } from '../../dependences'
import { Response,Request } from 'express'

export class RankingController{
  async getRanking(_:Request,res:Response):Promise<unknown | null>{
    const rank = await rankingService.ranking()
    if(!rank){
      res.status(404).send('players not found')
    }
    res.status(202).send(rank)
    return rank
  }
}