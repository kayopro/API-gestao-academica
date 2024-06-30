const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

mongoose
  .connect("mongodb+srv://usarApp:s4ads123@aulaweb.aefv2ko.mongodb.net", {
    retryWrites: true,
    w: "majority",
    appName: "AulaWeb",
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const authRoutes = require("./src/routes/authRoutes");
const alunoRoutes = require("./src/routes/alunoRoutes");
const disciplinaRoutes = require("./src/routes/disciplinaRoutes");

app.use("/auth", authRoutes);
app.use("/aluno", alunoRoutes);
app.use("/disciplina", disciplinaRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
