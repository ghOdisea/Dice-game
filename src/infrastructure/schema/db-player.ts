import { sequelize } from '../sequelize'
import { DataTypes } from 'sequelize'

export const dbPlayer = sequelize.define('player',{
  _id: {type: DataTypes.INTEGER,primaryKey:true},
  name: DataTypes.CHAR,
  registrationDate: DataTypes.DATE,
  victories: DataTypes.INTEGER,
  totalGames: DataTypes.INTEGER
},{tableName:'player'})
