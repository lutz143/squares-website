const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// subschema to house books within the Square model
const squareSchema = new Schema({
  // saved game data from Steam API
  square00: {
    type: String,
  },
  square01: {
    type: String,
  },
  square02: {
    type: String,
  },
  square03: {
    type: String,
  },
  square04: {
    type: String,
  },
  square05: {
    type: String,
  },
  square06: {
    type: String,
  },
  square07: {
    type: String,
  },
  square08: {
    type: String,
  },
  square09: {
    type: String,
  },
  square10: {
    type: String,
  },
  square11: {
    type: String,
  },
  square12: {
    type: String,
  },
  square13: {
    type: String,
  },
  square14: {
    type: String,
  },
  square15: {
    type: String,
  },
  square16: {
    type: String,
  },
  square17: {
    type: String,
  },
  square18: {
    type: String,
  },
  square19: {
    type: String,
  },
  square20: {
    type: String,
  },
  square21: {
    type: String,
  },
  square22: {
    type: String,
  },
  square23: {
    type: String,
  },
  square24: {
    type: String,
  },
  square25: {
    type: String,
  },
  square26: {
    type: String,
  },
  square27: {
    type: String,
  },
  square28: {
    type: String,
  },
  square29: {
    type: String,
  },
  square30: {
    type: String,
  },
  square31: {
    type: String,
  },
  square32: {
    type: String,
  },
  square33: {
    type: String,
  },
  square34: {
    type: String,
  },
  square35: {
    type: String,
  },
  square36: {
    type: String,
  },
  square37: {
    type: String,
  },
  square38: {
    type: String,
  },
  square39: {
    type: String,
  },
  square40: {
    type: String,
  },
  square41: {
    type: String,
  },
  square42: {
    type: String,
  },
  square43: {
    type: String,
  },
  square44: {
    type: String,
  },
  square45: {
    type: String,
  },
  square46: {
    type: String,
  },
  square47: {
    type: String,
  },
  square48: {
    type: String,
  },
  square49: {
    type: String,
  },
  square50: {
    type: String,
  },
  square51: {
    type: String,
  },
  square52: {
    type: String,
  },
  square53: {
    type: String,
  },
  square54: {
    type: String,
  },
  square55: {
    type: String,
  },
  square56: {
    type: String,
  },
  square57: {
    type: String,
  },
  square58: {
    type: String,
  },
  square59: {
    type: String,
  },
  square60: {
    type: String,
  },
  square61: {
    type: String,
  },
  square62: {
    type: String,
  },
  square63: {
    type: String,
  },
  square64: {
    type: String,
  },
  square65: {
    type: String,
  },
  square66: {
    type: String,
  },
  square67: {
    type: String,
  },
  square68: {
    type: String,
  },
  square69: {
    type: String,
  },
  square70: {
    type: String,
  },
  square71: {
    type: String,
  },
  square72: {
    type: String,
  },
  square73: {
    type: String,
  },
  square74: {
    type: String,
  },
  square75: {
    type: String,
  },
  square76: {
    type: String,
  },
  square77: {
    type: String,
  },
  square78: {
    type: String,
  },
  square79: {
    type: String,
  },
  square80: {
    type: String,
  },
  square81: {
    type: String,
  },
  square82: {
    type: String,
  },
  square83: {
    type: String,
  },
  square84: {
    type: String,
  },
  square85: {
    type: String,
  },
  square86: {
    type: String,
  },
  square87: {
    type: String,
  },
  square88: {
    type: String,
  },
  square89: {
    type: String,
  },
  square90: {
    type: String,
  },
  square91: {
    type: String,
  },
  square92: {
    type: String,
  },
  square93: {
    type: String,
  },
  square94: {
    type: String,
  },
  square95: {
    type: String,
  },
  square96: {
    type: String,
  },
  square97: {
    type: String,
  },
  square98: {
    type: String,
  },
  square99: {
    type: String,
  },  
});

const Square = model('Square', squareSchema);

module.exports = Square;