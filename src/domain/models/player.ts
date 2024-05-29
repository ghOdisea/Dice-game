export default class Player{

  public id: number
  public name : string
  public victories: number
  public registrationDate: Date
  public totalGames: number


  constructor(_id: number, name: string, victories: number, registrationDate: Date, totalGames: number){
    this.id = _id
    this.name = name
    this.victories = victories
    this.totalGames = totalGames 
    this.registrationDate = registrationDate
  }
}