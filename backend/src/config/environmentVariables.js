import dotenv from 'dotenv';

dotenv.config();

export default {
    server_port: process.env.SERVER_PORT,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD
};
