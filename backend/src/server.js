const express = require('express');
const cors = require('cors');
require('dotenv').config();
const pool = require('./database');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/ping", (req, res) => {
    res.send("pong");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});