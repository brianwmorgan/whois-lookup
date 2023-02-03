const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const domainRouter = require("./domain/domain.router.js");
const ipAddress = require("./ipAddress/ipAddress.router.js");
const errorHandler = require("./errors/errorHandler.js");
const notFound = require("./errors/notFound.js");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "build")));

app.use("/domain", domainRouter);
app.use("/ipAddress", ipAddress);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
