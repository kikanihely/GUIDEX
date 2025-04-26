const mongoose = require("mongoose");
// const URI = "mongodb://127.0.0.1:27017/guidexdb"

const URI = process.env.MONGODB_URI;
// mongoose.connect(URI)

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection successfull");
  } catch (error) {
    console.error("Connection fail: ", error);
    process.exit(0);
  }
};

module.exports = connectDb;
