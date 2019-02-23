const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const PORT = 5000;

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use("/", routes);

app.listen(PORT);
