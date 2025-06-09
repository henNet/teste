const database = require("./database");

async function getNames(req, res) {
  // const responseDB = await database.query("select * from alunos");

  res.json("Host on Vercel");
}

module.exports = { getNames };
