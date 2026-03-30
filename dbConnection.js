const mongoose = require('mongoose');
let connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB Connected");
  } catch (err) {
    console.log("DB Connection Failed");
    console.log(err);
  }
};

module.exports={connectDB}