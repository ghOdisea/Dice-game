import { BaseRouter } from './router'
import { RankingController } from '../controllers/ranking-controller'

export class RankingRouter extends BaseRouter<RankingController>{
  constructor(){
    super(RankingController)
  }

  routes():void{
    this.router.get('/ranking',(_,res)=>{
      void this.controller.getRanking(_,res)
    })
  }
}