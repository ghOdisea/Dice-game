import { RankingRepository } from '../../domain/repository/repository.ranking'
import { Model } from 'sequelize'


export class DaoRanking implements RankingRepository{

    getRanking(): Promise<Player[] | null>{

    }
    getRankingWinners(): Promise<Player[] | null>{

    }
    getRankingLosers(): Promise<Player[] | null>{

    }
}