const mongoose = require("mongoose");

const MatriculaSchema = new mongoose.Schema({
  alunoId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  disciplinaId: { type: mongoose.Schema.Types.ObjectId, ref: "Disciplina" },
});

module.exports = mongoose.model("Matricula", MatriculaSchema);
