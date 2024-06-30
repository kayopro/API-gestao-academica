const Disciplina = require("../models/disciplina");

async function cadastrarDisciplina(nome, codigo, professor) {
  const disciplina = new Disciplina({ nome, codigo, professor });
  await disciplina.save();
  return disciplina;
}

async function listarDisciplinas() {
  const disciplinas = await Disciplina.find();
  return disciplinas;
}

module.exports = {
  cadastrarDisciplina,
  listarDisciplinas,
};
