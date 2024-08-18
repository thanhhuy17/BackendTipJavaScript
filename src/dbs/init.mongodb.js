"use strict";

const mongoose = require("mongoose");

const connectString = `mongodb+srv://huymau170819999:DcFvDGaCgreoSSUI@cluster0.whtk0sp.mongodb.net/`;

const { countConnect } = require("../helpers/check.connect");

class Database {
  constructor() {
    this.connect();
  }

  //connect
  connect(type = "mongodb") {
    // Dev environment
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectString)
      .then((_) => {console.log("Connected Mongodb Success Pro", countConnect())})
      .catch((err) => console.log(`Error Connect!`));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
