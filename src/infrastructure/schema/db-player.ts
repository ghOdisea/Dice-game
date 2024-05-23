import { sequelize } from '../sequelize'
import { DataTypes } from 'sequelize'

export const dbPlayer = sequelize.define('usuari',{
  id_usuari: {type: DataTypes.INTEGER,primaryKey:true},
  name: DataTypes.CHAR,
  data_registre: DataTypes.DATE
},{tableName:'usuari'})
