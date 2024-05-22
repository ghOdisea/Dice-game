import Player from "../../domain/models/player";
import { Ranking } from "../../domain/models/ranking";
import { RankingRepository } from "../../domain/repository/ranking.repository";

export class RankingServices{
    constructor(private readonly rankingRepository: RankingRepository){
        this.rankingRepository = rankingRepository
    }

    async getAllRankings(): Promise<Array <Ranking | Player>>{
        const rankings = this.rankingRepository.getAllRankings()
        return rankings
    }

    async getLowestRanking(): Promise<Player | Ranking>{
        const lowestRanking = this.rankingRepository.getLowestRanking()
        return lowestRanking
    }

    async getHighestRanking(): Promise<Player | Ranking>{
        const highestRanking = this.rankingRepository.getLowestRanking()
        return highestRanking
    }

}