import express from 'express';
import './database/connection';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.listen(3333);
// Rota    => conjunto
// Recurso => usúario

// Médoto HTTP => GET, POST, PUT, DELETE
// Parâmetros

// GET    => Busca uma informação (Lista, item)
// POST   => Criando uma informção
// PUT    => Editando uma infomação
// DELETE => Deletando uma informação

// Query Params: http://localhost:3333/users?search=page2
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users (Identificar um recurso)
