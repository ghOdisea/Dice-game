export default class Player{

  public _id: number
  public name : string
  public victories: number
  public registrationDate: Date
  public totalGames: number


  constructor(_id: number, name: string, victories: number, registrationDate: Date, totalGames: number){
    this._id = _id
    this.name = name
    this.victories = victories
    this.registrationDate = registrationDate
    this.totalGames = totalGames 
  }
}