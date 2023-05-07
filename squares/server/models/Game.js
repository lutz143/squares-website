const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// subschema to house books within the User model
const gameSchema = new Schema({
  // saved game data from Steam API
  title: {
    type: String,
    required: true,
  },
  sport: {
    type: String,
  },
  team1: {
    type: String,
  },
  team2: {
    type: String,
  },
  team1_score: {
    type: Number,
    default: 0
  },
  team2_score: {
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
});

const Game = model('Game', gameSchema);

module.exports = Game;