import Player from '../../domain/models/player'
import { sequelize } from '../sequelize'
import { DataTypes, Model, NOW } from 'sequelize'

export const dbPlayer = sequelize.define<Model<Player>>('player',{
<<<<<<< HEAD
  id: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
  name:{type: DataTypes.CHAR, defaultValue: 'Anonymous'},
  victories:{type: DataTypes.CHAR, defaultValue: 0},
  totalGames:{type: DataTypes.INTEGER, defaultValue: 0},
  registrationDate:{type: DataTypes.DATE, defaultValue: NOW}
=======
  id: {type: DataTypes.INTEGER,primaryKey:true},
  name: DataTypes.CHAR,
  victories: DataTypes.CHAR,
  registrationDate: DataTypes.DATE,
  totalGames:DataTypes.INTEGER
>>>>>>> d612fcb91a718b390b78921521c01ff274f29fb7
},{tableName:'player'}) 
