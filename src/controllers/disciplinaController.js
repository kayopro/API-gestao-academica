const disciplinaService = require("../services/disciplinaService");

async function cadastrarDisciplina(req, res) {
  try {
    const { nome, codigo, professor } = req.body;
    await disciplinaService.cadastrarDisciplina(nome, codigo, professor);
    res.status(201).send("Disciplina cadastrada com sucesso");
  } catch (error) {
    res.status(400).send("Erro ao cadastrar disciplina");
  }
}

async function listarDisciplinas(req, res) {
  try {
    const disciplinas = await disciplinaService.listarDisciplinas();
    res.status(200).json(disciplinas);
  } catch (error) {
    res.status(400).send("Erro ao listar disciplinas");
  }
}

module.exports = {
  cadastrarDisciplina,
  listarDisciplinas,
};
