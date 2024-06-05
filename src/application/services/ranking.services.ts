import { RankingRepository } from '../../domain/repository/repository.ranking'


export class RankingService{
  constructor(private readonly rankingRepository: RankingRepository){
    this.rankingRepository = rankingRepository
  }

  async ranking():Promise<unknown | null>{
    const rank = this.rankingRepository.getRanking()
    return rank
  }
}