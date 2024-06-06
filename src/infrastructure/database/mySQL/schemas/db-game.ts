import { sequelize } from '../config.sequelize'
import { DataTypes, Model } from 'sequelize'
import Game from '../../../../domain/models/game'
<<<<<<< HEAD
/* import { dbPlayer } from './db-player' */
=======
// import { dbPlayer } from './db-player'
>>>>>>> bb0686510f01f580fb5c61337cc323224b2eeb48

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

<<<<<<< HEAD
/* dbPlayer.hasMany(dbGame,{
  foreignKey: 'id'
}) */
=======
// dbPlayer.hasMany(dbGame,{
//   foreignKey: 'id'
// })
>>>>>>> bb0686510f01f580fb5c61337cc323224b2eeb48
