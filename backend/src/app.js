import express from 'express';
import cors from 'cors';

import './config/connectToDatabase.js';

import environmentVariables from './config/environmentVariables.js';
import useRouter from './routers/router.js';

const { server_port } = environmentVariables;

const app = express();

app.use(express.json());
app.use(cors());
app.use(useRouter);

//Rodar o servidor
app.listen(server_port, () => {
    console.log(`Servidor rodando na porta ${server_port}!`);
});
