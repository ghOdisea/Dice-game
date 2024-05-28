import { sequelize } from '../sequelize'
import { DataTypes } from 'sequelize'

export const dbRanking = sequelize.define('ranking',{
  id: {type: DataTypes.INTEGER,primaryKey:true},
  id_game: {
    type: DataTypes.INTEGER,
    references:{
      model: 'Game',
      key: 'id'
    }
  },
  id_player: {
    type: DataTypes.INTEGER,
    references:{
      model: 'Player',
      key: 'id'
    }
  },
  score: DataTypes.INTEGER
},{tableName:'ranking'})