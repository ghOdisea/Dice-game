import { Model, Sequelize } from 'sequelize'
import { DataTypes } from 'sequelize'
import { sequelize } from '../sequelize'
import { Ranking } from '../../domain/models/ranking'
import { dbPlayer } from './db-player'

export const dbRanking = sequelize.define<Model<Ranking>>(
  'ranking',{
    _id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    id_game: DataTypes.INTEGER,
    id_player: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, { tableName: 'ranking' } ) 

// // Define the associations
// dbPlayer.hasMany(dbRanking, { foreignKey: 'id_player' })
// dbRanking.belongsTo(dbPlayer, { foreignKey: 'id_player' })

// // Define the query
// const query = `
// SELECT
// p.name as Player_name,
// r.score as Game_result,
// r.id_game as Game_id,
// p.totalGames as Games_played,
// (p.victories * 100 / ( p.totalGames )) as Success_Rate
// FROM ranking r
// INNER JOIN player p
// ON p.id = r.id_player
// ORDER BY p.victories DESC;
// `

// // Execute the query
// sequelize.query(query, { type: Sequelize.QueryTypes.SELECT })
//   .then(results => {
//     console.log(results)
//   })
//   .catch(error => {
//     console.error(error)
//   })