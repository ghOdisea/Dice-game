export default class Player{

    public _id : number
    public name: string
    public victories: number
    public reg_date: Date
    public totalGames: number


    constructor(id: number, name: string, victories: number, reg_date: Date, totalGames: number){
        this._id = id
        this.name = name
        this.victories = victories
        this.reg_date = reg_date
        this.totalGames = totalGames 
    }
}