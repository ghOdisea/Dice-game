

export interface RankingRepository{
    getRanking(): Promise<unknown[] | null>
    getRankingWinners(): Promise<unknown[] | null>
    getRankingLosers(): Promise<unknown[] | null>
}