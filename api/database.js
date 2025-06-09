const { Pool } = require("pg");

const url = "postgresql://postgres:123@localhost:5432/alunos";

const database = new Pool({
  connectionString: url,
});

// database.on("connect", () => {
//   console.log("Base de Dados conectado com sucesso!");
// });

module.exports = database;
