import { RankingRepository } from '../../../../domain/repository/repository.ranking'
import { sequelize } from '../config.sequelize'




export class DaoRanking implements RankingRepository{

  async getRanking(): Promise<unknown[] | null>{
    const ranking = await sequelize.query('select p.name, p.id as Player_ID, p.totalGames, round((p.victories * 100 / (p.totalGames)),2) as succes_rate from player p, game g where p.id = g.id_player group by p.id order by ((p.victories * 100 / (p.totalGames))) desc')
    return ranking[0]
  }
  async getRankingWinners(): Promise<unknown[] | null>{
    const winners = await sequelize.query('select id as Player_ID,name as Player_name,(victories * 100 / (totalGames)) as Succes_Rate from player order by (victories * 100 / (totalGames)) desc limit 3')
    return winners[0]
  }
  async getRankingLosers(): Promise<unknown[] | null>{
    const losers = await sequelize.query('select id as Player_ID,name as Player_name,(victories * 100 / (totalGames)) as Succes_Rate from player order by (victories * 100 / (totalGames)) asc limit 3')
    return losers[0]
  }
}