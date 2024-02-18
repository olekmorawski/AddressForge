const port = 8000;
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.listen(port, () => console.log("server on port " + port));