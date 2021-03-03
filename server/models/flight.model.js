const mongoose = require('../db');

const flightSchema = new mongoose.Schema({
  userId: {
    // type: mongoose.Schema.Types.ObjectId,    // use the user _id (which is a type ObjectId) as foreign key
    type: String,                               // temporary
    required: true
  },
  date: {
    type: String,
    required: true
  },
  departure: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  aircraftRegistration: {
    type: String,
    required: true
  },
  aircraftType: {
    type: String,
    required: true
  },
  offBlock: {
    type: Number,
    required: true
  },
  takeOff: {
    type: Number,
    required: true
  },
  landing: {
    type: Number,
    required: true
  },
  onBlock: {
    type: Number,
    required: true
  },
}, { collection: 'flights' });

module.exports = mongoose.model('Flight', flightSchema);
