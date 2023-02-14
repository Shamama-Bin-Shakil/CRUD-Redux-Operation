const express = require("express");
const connectDB = require("./server/db/db");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

connectDB();

app.use("/", require("./server/router/router"));

app.listen(port, () =>
  console.log("> Server is up and running on port http://localhost:" + port)
);
