const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

router.post("/registrar", userController.registrarAluno);

router.post("/autenticar", authController.autenticarAluno);

module.exports = router;
