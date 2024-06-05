import { sequelize } from '../sequelize'
import { DataTypes, Model } from 'sequelize'
import Game from '../../../../domain/models/game'
import { dbPlayer } from './db-player'

export const dbGame = sequelize.define<Model<Game>>('game',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey:true, 
    autoIncrement: true
  },
  id_player: {
    type: DataTypes.INTEGER,
    references:{
      model:'Player',
      key: 'id'
    },
    allowNull: false
  },
  dice1:{ 
    type: DataTypes.INTEGER,  
    allowNull: false
  },
  dice2:{ 
    type: DataTypes.INTEGER,
    allowNull: false
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},{ tableName: 'game'}

)

dbPlayer.hasMany(dbGame,{
  foreignKey: 'id'
})