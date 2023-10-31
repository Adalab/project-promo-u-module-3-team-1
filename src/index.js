const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3500;
app.listen(port, () => {
  console.log(`ha arrancado mi server en http://localhost:${port}`);
});
app.get('/projects/list', (req, res) => {
  const projects = [{ nombre: 'Alba' }, { nombre: 'Mireia' }];
  res.json(projects);
  res.send('Hola adalabers');
});
app.get('/', (req, res) => {
  res.send('Hola adalabersss');
});
const staticServerPath = './web';
app.use(express.static(staticServerPath));
