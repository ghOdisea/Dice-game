import { RankingRepository } from '../../../../domain/repository/repository.ranking'
import { sequelize } from '../config.sequelize'




export class DaoRanking implements RankingRepository{

  async getRanking(): Promise<unknown[] | null>{
    const ranking = await sequelize.query('SELECT p.name as Player_name, r.score as Game_result,r.id_game as Game_id,p.totalGames as Games_played,(p.victories * 100 / ( p.totalGames )) as Success_RateFROM ranking r INNER JOIN player p ON p.id = r.id_player ORDER BY p.victories DESC')
    return ranking
  }
  async getRankingWinners(): Promise<unknown[] | null>{
    const losers = await sequelize.query('select is as Player_ID,name as Player_name,(victories * 100 / (totalGames)) as Succes_Rate from player order by victories desc')
    return losers
  }
  async getRankingLosers(): Promise<unknown[] | null>{
    const losers = await sequelize.query('select is as Player_ID,name as Player_name,(victories * 100 / (totalGames)) as Succes_Rate from player order by victories asc')
    return losers
  }
}