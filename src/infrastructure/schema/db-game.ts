import { sequelize } from '../sequelize'
import { DataTypes } from 'sequelize'

export const dbGame = sequelize.define('game',{
  id: {type: DataTypes.INTEGER,primaryKey:true},
  id_player: {
    type: DataTypes.INTEGER,
    references:{
      model:'Player',
      key: 'id'
    }
  },
  dice1: DataTypes.INTEGER,
  dice2: DataTypes.INTEGER
},{tableName:'game'})