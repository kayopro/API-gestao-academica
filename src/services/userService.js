const bcrypt = require("bcrypt");
const User = require("../models/user");

async function registrarAluno(nome, email, senha) {
  const hashedSenha = await bcrypt.hash(senha, 10);
  const user = new User({ nome, email, senha: hashedSenha });
  await user.save();
  return user;
}

module.exports = {
  registrarAluno,
};
