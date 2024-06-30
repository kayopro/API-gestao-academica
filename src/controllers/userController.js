const userService = require("../services/userService");

async function registrarAluno(req, res) {
  try {
    const { nome, email, senha } = req.body;
    await userService.registrarAluno(nome, email, senha);
    res.status(201).send("Aluno registrado com sucesso");
  } catch (error) {
    res.status(400).send("Erro ao registrar aluno");
  }
}

module.exports = {
  registrarAluno,
};
