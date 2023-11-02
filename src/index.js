const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
app.use(cors());
app.use (express.json ({limit:"25mb"}));

async function getConnection() {
  //creary configurar la conexion
  const connection = await mysql.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_admin project",
    password: "GpgBz?d5W9jbcGc",
    database: "freedb_proyectosMolones",
  });
  connection.connect();
  return connection;
}


const port = 3500;
app.listen(port, () => {
  console.log(`ha arrancado mi server en http://localhost:${port}`);
});


app.get('/authors/list', async (req, res) => {
  const conn = await getConnection();
  const queryAuthors = "SELECT * FROM autora, proyectos WHERE proyectos.fk_autora = autora.idAutora;";
  const [results] = await conn.query(queryAuthors);
  conn.end();

  res.json(results);
});

const staticServerPath = './web/dist/';
app.use(express.static(staticServerPath));
