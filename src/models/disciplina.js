const mongoose = require("mongoose");

const DisciplinaSchema = new mongoose.Schema({
  nome: String,
  codigo: String,
  professor: String,
});

module.exports = mongoose.model("Disciplina", DisciplinaSchema);
