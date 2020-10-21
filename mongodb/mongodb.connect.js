const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(
      '',
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  } catch (err) {
    console.log('Error connecting to MongoDB');
    console.log(err);
  }
}

module.exports = { connect };
