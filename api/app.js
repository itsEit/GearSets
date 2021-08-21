const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const app = express();

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

app.use(bodyParser.json());

const gearRoute = require("./routes/gear");

app.use("/gear", gearRoute);

const devEnv = true;
const conn = devEnv ? "mongodb://localhost:27017/" : process.env.DB_CONNECTION;

// DB Connection
mongoose.connect(
  conn,
  { dbName: "GearDb", useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Connected");
  }
);

//Listeners
app.listen(3000);
