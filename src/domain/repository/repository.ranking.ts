import Player from '../models/player'

export interface RankingRepository{
    getRanking(): Promise<Player[] | null>
    getRankingWinners(): Promise<Player[] | null>
    getRankingLosers(): Promise<Player[] | null>
}