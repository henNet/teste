const database = require("./database");

async function getNames(req, res) {
  const responseDB = await database.query("select * from alunos");

  res.json(responseDB.rows);
}

module.exports = { getNames };
