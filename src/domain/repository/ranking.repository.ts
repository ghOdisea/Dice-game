import Player from "../models/player";
import { Ranking } from "../models/ranking";

export interface RankingRepository{
    getAllRankings: () => Array<Ranking | Player>
    getLowestRanking: () => Player | Ranking
    getHighestRanking: () => Player | Ranking
}