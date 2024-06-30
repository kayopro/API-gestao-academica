const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const secretKey = "secretKey";

async function autenticarAluno(req, res) {
  try {
    const { email, senha } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("Email ou senha incorretos");
    }
    const validSenha = await bcrypt.compare(senha, user.senha);
    if (!validSenha) {
      return res.status(400).send("Email ou senha incorretos");
    }
    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).send("Erro ao autenticar aluno");
  }
}

module.exports = {
  autenticarAluno,
};
