const mongoose = require('../db');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  categoriesToTrack: {
    type: Array,
    required: false
  },
  flights: {
    type: Array,
    required: false
  }
}, { collection: 'users' });

module.exports = mongoose.model('User', userSchema);
