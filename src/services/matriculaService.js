const Matricula = require("../models/matricula");

async function matricularAluno(alunoId, disciplinaId) {
  const matricula = new Matricula({ alunoId, disciplinaId });
  await matricula.save();
  return matricula;
}

module.exports = {
  matricularAluno,
};
