const mongoose = require("mongoose");

const connectString =
  "mongodb+srv://admin:nQavSYSU5z2n41x0@cluster0.akjqd1l.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);

mongoose
  .connect(connectString)
  .then(() => {
    console.log("CONNECTED TO DB...");
  })
  .catch((err) => {
    console.log(err);
  });
