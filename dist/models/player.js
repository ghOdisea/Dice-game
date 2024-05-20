"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(id, name, victories, reg_date, totalGames) {
        this._id = id;
        this.name = name;
        this.victories = victories;
        this.reg_date = reg_date;
        this.totalGames = totalGames;
    }
}
exports.default = Player;
