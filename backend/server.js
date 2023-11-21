const express = require('express');
const cors = require('cors');
const POST = process.env.PORT || 5000;
const connectDB = require('./configs/dbConfig');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "welcome to klusterthon023 Fintech Backend App" });
});

connectDB();
app.listen(POST, () => {
  console.log(`Server is running on port ${POST}.`);
});