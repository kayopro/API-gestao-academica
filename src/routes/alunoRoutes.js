const express = require("express");
const router = express.Router();
const matriculaController = require("../controllers/matriculaController");
const authenticate = require("../middlewares/authenticate");

router.post("/matricular", authenticate, matriculaController.matricularAluno);

module.exports = router;
