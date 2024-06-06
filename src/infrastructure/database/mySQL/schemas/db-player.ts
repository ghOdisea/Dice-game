import Player from '../../../../domain/models/player'
import { sequelize } from '../config.sequelize'
import { DataTypes, Model, NOW } from 'sequelize'
import { dbGame } from './db-game'

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


dbGame.belongsTo(dbPlayer, {
  foreignKey: 'id'
})