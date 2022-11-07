const mongoose = require("mongoose");

const connection = () => {
  console.log("Connected successfully");
  return mongoose.connect(process.env.MONGODB_URL);
};

module.exports = connection;
