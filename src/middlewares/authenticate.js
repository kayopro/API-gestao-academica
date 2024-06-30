const jwt = require("jsonwebtoken");
const secretKey = "secretKey";

function authenticate(req, res, next) {
  const token = req.header("Authorization").replace("Bearer ", "");
  if (!token) {
    return res.status(401).send("Acesso negado");
  }
  try {
    const verified = jwt.verify(token, secretKey);
    req.user = verified;
    next();
  } catch (error) {
    res.status(401).send("Token inválido");
  }
}

module.exports = authenticate;
