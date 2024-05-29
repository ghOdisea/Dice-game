import Player from '../../domain/models/player'
import { sequelize } from '../sequelize'
import { DataTypes, Model } from 'sequelize'

<<<<<<< HEAD
export const dbPlayer = sequelize.define('player',{
  id: {type: DataTypes.INTEGER,primaryKey:true},
  name: DataTypes.CHAR,
=======
export const dbPlayer = sequelize.define<Model<Player>>('player',{
  id: {type: DataTypes.INTEGER,primaryKey:true},
  name: DataTypes.INTEGER,
>>>>>>> d710a8ac188138cf510b547e50682a454a4a6bc4
  victories: DataTypes.CHAR,
  registrationDate: DataTypes.DATE,
  totalGames:DataTypes.INTEGER
},{tableName:'player'}) 
