import { Request,Response } from 'express'
import { playerServices } from '../../dependences'
import { RankingServices } from '../../../application/services/ranking.services'

export class RankingController{

    async getAllRankings(_:Request, res: Response): Promise<void>{
        const rankings = RankingServices.
    }
}