const express = require("express");
const Controller = require("./controller");
const app = express();

app.get("/", Controller.getNames);

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
