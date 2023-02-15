const mongoose = require("mongoose");



const connectDB = (url)=>{
  mongoose.set("strictQuery", false);
  mongoose
  .connect(url)
  .then(() => {
    console.log("CONNECTED TO DB...");
  })
  .catch((err) => {
    console.log(err);
  });  
}

module.exports = connectDB

