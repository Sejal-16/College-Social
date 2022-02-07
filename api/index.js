const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const { request } = require("express");
dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("MongoDB Connected!");
  }
);

//middleWare
app.use(cors());
app.use(express.json()); // for parsing the request
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);

app.use("/api/auth", authRoute);

app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Backend Server is running");
});
