const { Pool } = require("pg");

// const url = "postgresql://postgres:123@localhost:5432/alunos";
const url =
  "postgresql://neondb_owner:npg_5emtUOd6gpsQ@ep-empty-term-ackcfas1-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require";

const database = new Pool({
  connectionString: url,
});

// database.on("connect", () => {
//   console.log("Base de Dados conectado com sucesso!");
// });

module.exports = database;
