const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Import the Sequelize instance

// create our Game model
class Game extends Model {}
Game.init(
  {
    section_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
    },
    sport: {
      type: DataTypes.STRING(50),
    },
    away_team: {
      type: DataTypes.STRING(50),
    },
    home_team: {
      type: DataTypes.STRING(50),
    },
    away_team_score: {
      type: DataTypes.INTEGER,
      default: 0
    },
    home_team_score: {
      type: DataTypes.INTEGER,
      default: 0
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    // underscored: true,
    modelName: 'game'
  }
);

module.exports = Game;