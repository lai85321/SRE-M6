const express = require("express");
const router = express.Router();

const { getAddOne } = require("./controller");

router.get("/addOne", getAddOne);

module.exports = router;
