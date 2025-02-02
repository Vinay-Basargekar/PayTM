const express = require("express");
var cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use("/api/v1", rootRouter);




