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

