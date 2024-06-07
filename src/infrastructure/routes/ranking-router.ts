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
    this.router.get('/ranking/winners',(_,res)=>{
      void this.controller.getWinners(_,res) 
    })
    this.router.get('/ranking/losers',(_,res)=>{
      void this.controller.getLosers(_,res)
    })
  }
}