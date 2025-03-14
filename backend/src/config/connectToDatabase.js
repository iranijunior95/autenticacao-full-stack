import mongoose from 'mongoose';
import environmentVariables from './environmentVariables.js';

const { db_user, db_password } = environmentVariables;

function connection() {
    mongoose.connect(`mongodb+srv://${db_user}:${db_password}@autenticacao.q1rxm.mongodb.net/?retryWrites=true&w=majority&appName=autenticacao`)
        .then(() => console.log('Conexão com Banco de Dados realizada com sucesso!'))
        .catch((error) => console.log(`Erro ao conectar ao Banco de Dados: ${error}`))
}

connection();