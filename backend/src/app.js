import express from 'express';
import cors from 'cors';

import environmentVariables from './config/environmentVariables.js';
import useRouter from './routers/router.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(useRouter);

app.listen(environmentVariables.server_port, () => {
    console.log(`Servidor rodando na porta ${environmentVariables.server_port}!`);
});
