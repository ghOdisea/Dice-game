import { dbRanking } from '../schema/db-ranking'
import { RankingRepository } from '../../domain/repository/ranking.repository'
import { Ranking } from '../../domain/models/ranking'
import { Model } from 'sequelize'
import Player from '../../domain/models/player'

export class DaoRanking implements RankingRepository{
  async getAllRankings(): Promise<Model<Ranking | Player>[]>{
    const rankings = dbRanking.
  }
}