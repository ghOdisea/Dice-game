import Player from '../../domain/models/player'
import { sequelize } from '../sequelize'
import { DataTypes, Model } from 'sequelize'

export const dbPlayer = sequelize.define<Model<Player>>('player',{
  id: {type: DataTypes.INTEGER,primaryKey:true},
  name: DataTypes.CHAR,
  victories: DataTypes.CHAR,
  registrationDate: DataTypes.DATE,
  totalGames:DataTypes.INTEGER
},{tableName:'player'}) 
