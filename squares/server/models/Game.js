const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Import the Sequelize instance

// create our Valuation model
class Game extends Model {}
// subschema to house books within the User model
Game.init(
  {
    // saved game data from Steam API
    section_id: {
      type: Number,
      required: true,
    },
    sport: {
      type: String,
    },
    teams: {
      type: String,
    },
    away_team: {
      type: String,
    },
    home_team: {
      type: String,
    },
    away_team_score: {
      type: Number,
      default: 0
    },
    home_team_score: {
      type: Number,
      default: 0
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    squares: [
      {
        squareOwner: {
          type: String,
          required: true,
        },
      },
    ],
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