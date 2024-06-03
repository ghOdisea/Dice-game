import { sequelize } from '../sequelize'
import { DataTypes, Model } from 'sequelize'
import { getRandomValue } from './utils/randomInt'
import Game from '../../domain/models/game'

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
    }},
  dice1:{ 
    type: DataTypes.INTEGER, 
    defaultValue: getRandomValue()
  },
  dice2:{ 
    type: DataTypes.INTEGER,
    defaultValue: getRandomValue()
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    get() {
      return this.getDataValue('dice1') + this.getDataValue('dice2')
    }
  }
},{ tableName: 'game',
  hooks: {
    beforeCreate: game => {
      game.score = game.dice1 + game.dice2
    },
    beforeUpdate: game => {
      game.score = game.dice1 + game.dice2
    }
  }

})