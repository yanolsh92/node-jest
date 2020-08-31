const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://yanolsh:IHateApple6@cluster0.gi3jq.mongodb.net/todo-tdd?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  } catch (err) {
    console.log('Error connecting to MongoDB');
    console.log(err);
  }
}

module.exports = { connect };
