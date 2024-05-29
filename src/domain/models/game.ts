export default class Game {
  public _id: number
  public id_player: number
  public dice1: number
  public dice2: number
  public score: number

  constructor(id: number, id_player: number, dice1: number, dice2: number){
    this._id = id
    this.id_player = id_player
    this.dice1 = dice1
    this.dice2 = dice2
    this.score = dice1 + dice2
  }
}