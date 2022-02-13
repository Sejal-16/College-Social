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
const upload = require("./utils/multer");
const cloudinary = require("cloudinary").v2;

const { request } = require("express");
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

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

app.post("/api/upload", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    res.json({ img: result.secure_url });
  } catch (error) {
    console.log(error);
    res.json({ error: "Error occurred!" });
  }
});

app.use("/api/users", userRoute);

app.use("/api/auth", authRoute);

app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Backend Server is running");
});
