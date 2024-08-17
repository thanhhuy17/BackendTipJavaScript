"use strict";
const mongoose = require("mongoose");

const connectString = `mongodb+srv://huymau170819999:DcFvDGaCgreoSSUI@cluster0.whtk0sp.mongodb.net/`;
// const connectString = `mongodb://127.0.0.1:27017/shopDEV`;

mongoose
  .connect(connectString)
  .then((_) => console.log(`Connected Mongodb Success`))
  .catch((err) => console.log(`Error Connect!`));

//dev
if (1 === 0) {
  mongoose.set("debug", true);
  mongoose.set("debug", { color: true });
}

module.exports = mongoose;
