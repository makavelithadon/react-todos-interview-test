const express = require("express");
const router = express.Router();

require("./todos")(router);
require("./todosLists")(router);

module.exports = router;
