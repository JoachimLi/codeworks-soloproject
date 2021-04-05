const mongoose = require('mongoose');

const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(
  `mongodb://localhost:${DB_PORT}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(`Sorry, something went wrong! ${err}`); // eslint-disable-line no-console
    } else {
      console.log(`Database (${DB_NAME}) connected @ port ${DB_PORT}!`); // eslint-disable-line no-console
    }
  }
);

module.exports = mongoose;
