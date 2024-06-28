const express = require("express");
const app = express();
const PORT = 3001 || process.env.PORT;
const cors = require("cors");
const { User } = require("./models/User");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  "allowedHeaders": ["Content-Type", "Authorization", "email"]
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/user", require("./routes/userRoute"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
