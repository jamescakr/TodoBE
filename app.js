const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
require("dotenv").config();
const app = express();
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;

app.use(bodyParser.json());
app.use(cors());
app.use("/api", indexRouter);
const mongoURI = MONGODB_URI_PROD;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("mongoose connected!");
  })
  .catch((err) => {
    console.log("DB connection fail!");
  });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is on ${PORT}`);
});

// app.listen(4000, () => {
//   console.log("server is on 4000");
// });
