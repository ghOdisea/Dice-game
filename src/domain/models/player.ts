export default class Player{

  public id_usuari : number
  public name: string
  public data_registre: Date
/*   public reg_date: Date
  public totalGames: number */


/*   constructor(id: number, name: string, victories: number, reg_date: Date, totalGames: number){
    this._id = id
    this.name = name
    this.victories = victories
    this.reg_date = reg_date
    this.totalGames = totalGames 
  } */
  constructor(id_usuari: number, name: string, data_registre: Date){
    this.id_usuari = id_usuari
    this.name = name
    this.data_registre = data_registre
  }
}