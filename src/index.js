const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
app.use(cors());
app.use(express.json({ limit: '25mb' }));

async function getConnection() {
  //creary configurar la conexion
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

const staticServerPath = './web/dist/';
app.use(express.static(staticServerPath));

// app.post('/createproject', async (req, res) => {
//   const body = req.body;
//   console.log(body);
//   const insertUser = `INSERT INTO users(username, image) values(?,?,?);`;
//   const [result] = await conn.query(
//     insertUser[(body.autor, body.job, body.photo)]
//   );
//   console.log(result);

app.post('/createproject', async(req, res) => {
  console.log('crear projecto')
   //1. hacer la query
   const queryInsertAutora = `INSERT INTO autora (autor, job, photo) VALUES ('?','?','?'); `;
   const queryInsertProyecto = `INSERT INTO proyectos (name, slogan, repo, demo, technologies, des, image) VALUES ('?','?','?','?','?','?','?'); `;

   //2. hacer la conexion
   const conn = await getConnection();
 
   //3. ejecutar la query
   const [results] = await conn
    .query(queryInsertAutora, queryInsertProyecto[
      req.body.autor,
      req.body.job,
      req.body.photo
   ],[
      req.body.name,
      req.body.slogan,
      req.body.repo,
      req.body.demo,
      req.body.technologies,
      req.body.des,
      req.body.image
    ]);
 
   console.log(results);
   conn.end();
   res.json({
     success: true,
     idNewAutora: results.insertId,
     message: "Se ha insertado correctamente",
   });
 });


  // rs.json({
  //   cardUrl:
  // })

