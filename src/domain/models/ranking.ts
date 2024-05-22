export class Ranking{
    public _id : number
    public id_game : number
    public id_player : number
    public score : number

    constructor(id: number, id_game: number, id_player: number, score: number){
        this._id = id
        this.id_game = id_game
        this.id_player = id_player
        this.score = score
    }
}