import { sequelize } from '../sequelize'
import { DataTypes } from 'sequelize'

export const dbPlayer = sequelize.define('player',{
  name: {type: DataTypes.INTEGER,primaryKey:true},
  victories: DataTypes.CHAR,
  registrationDate: DataTypes.DATE,
  totalGames:DataTypes.INTEGER
},{tableName:'player'}) 
