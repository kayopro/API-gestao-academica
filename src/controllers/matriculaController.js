const matriculaService = require("../services/matriculaService");

async function matricularAluno(req, res) {
  try {
    const { disciplinaId } = req.body;
    const matricula = await matriculaService.matricularAluno(
      req.user.userId,
      disciplinaId
    );
    res.status(201).send("Matriculado com sucesso");
  } catch (error) {
    res.status(400).send("Erro ao matricular");
  }
}

module.exports = {
  matricularAluno,
};
