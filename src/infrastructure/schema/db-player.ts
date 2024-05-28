import { sequelize } from '../sequelize'
import { DataTypes } from 'sequelize'

export const dbPlayer = sequelize.define('player',{
  id: {type: DataTypes.INTEGER,primaryKey:true},
  name: DataTypes.CHAR,
  victories: DataTypes.CHAR,
  registrationDate: DataTypes.DATE,
  totalGames:DataTypes.INTEGER
},{tableName:'player'}) 
