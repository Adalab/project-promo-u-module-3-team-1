const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
app.use(cors());
app.use(express.json({ limit: '25mb' }));

async function getConnection() {
  //crear y configurar la conexion
  const connection = await mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_admin project',
    password: 'GpgBz?d5W9jbcGc',
    database: 'freedb_proyectosMolones',
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
  const queryAuthors =
    'SELECT * FROM autora, proyectos WHERE proyectos.fk_autora = autora.idAutora;';
  const [results] = await conn.query(queryAuthors);
  conn.end();

  res.json(results);
});


app.post('/createproject', async(req, res) => {
  console.log('crear projecto')
    // 1. Hacer la query
  const queryInsertAutora = `INSERT INTO autora (autor, job, photo) VALUES (?, ?, ?); `;
  const queryInsertProyectos = `INSERT INTO proyectos (name, slogan, repo, demo, technologies, fk_autora) VALUES (?, ?, ?, ?, ?, ?);` ;

  // 2. Hacer la conexión
  const conn = await getConnection();

  // 3. Ejecutar la query para la tabla autora
  const [resultsAutora] = await conn.query(queryInsertAutora, [
    req.body.autor,
    req.body.job,
    req.body.photo
  ]);

  // 4. Ejecutar la query para la tabla proyectos
  const [resultsProyectos] = await conn.query(queryInsertProyectos, [
    req.body.name,
    req.body.slogan,
    req.body.repo,
    req.body.demo,
    req.body.technologies,
    resultsAutora.insertId
    //req.body.desc
    //req.body.image
  ]);

  console.log(resultsAutora);
  console.log(resultsProyectos);

  conn.end();
  res.json({
    success: true,
    idNewAutora: resultsAutora.insertId,
    idNewProyectos: resultsProyectos.insertId,
    message: "Se ha insertado correctamente",
  });

});

  const staticServerPath = './web/dist/';
  app.use(express.static(staticServerPath));


