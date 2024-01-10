const express = require("express");
const app = express();
const PORT = 3002 || process.env.PORT;
const cors = require("cors");
const { User } = require("./models/User");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log(err);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/createuser", async (req, res) => {
  const user = req.body;
  try {
    const result = await User.create({
      email: user.email,
      name: user.name,
      major: user.major,
      year: user.year,
    });
    await result.save();
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
