const express = require("express");
const app = express()
const PORT = 3001 || process.env.PORT;
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("Hello world");
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})