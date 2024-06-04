<<<<<<< HEAD
/* import Game from '../../domain/models/game' */
=======
>>>>>>> 23ed55aa865ebb69e0a3025a908423f64b2a15a8
import Player from '../../domain/models/player'
import { sequelize } from '../sequelize'
import { DataTypes, Model, NOW } from 'sequelize'
/* import { dbGame } from './db-game' */

export const dbPlayer = sequelize.define<Model<Player>>('player',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, 
    autoIncrement: true
  },
  name:{
    type: DataTypes.TEXT,
    defaultValue: 'Anonymous'
  },
  victories:{
    type: DataTypes.CHAR, 
    defaultValue: 0
  },
  totalGames:{
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  registrationDate:{
    type: DataTypes.DATE, 
    defaultValue: NOW
  }
},{tableName:'player'}) 
/* 
dbPlayer.hasMany(dbGame) */
