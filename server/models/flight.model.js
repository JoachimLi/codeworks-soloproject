const mongoose = require('../db');

const flightSchema = new mongoose.Schema({
  userId: {
    type: String,
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
  blockTime: {
    type: String,
    required: true
  },
  flightTime: {
    type: String,
    required: true
  },
  categories: {
    type: Array,
    required: true
  }
}, { collection: 'flights' });

module.exports = mongoose.model('Flight', flightSchema);
