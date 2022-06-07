const mongoose = require('mongoose');

const main = async () => {
  await mongoose.connect(
    'mongodb+srv://<username>:<password>@cluster0.v1c4j.mongodb.net/laundry-service?retryWrites=true&w=majority'
  );
  console.log('Database connected');
};

module.exports = main;
