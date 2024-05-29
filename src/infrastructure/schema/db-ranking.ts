<<<<<<< HEAD
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
=======
import { Model } from 'sequelize'
import { DataTypes } from 'sequelize'
import { sequelize } from '../sequelize'
import { Ranking } from '../../domain/models/ranking'

export const dbRanking = sequelize.define<Model<Ranking>>(
  'ranking',{
    _id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    id_game: DataTypes.INTEGER,
    id_player: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, { tableName: 'ranking' } ) 

>>>>>>> d710a8ac188138cf510b547e50682a454a4a6bc4
