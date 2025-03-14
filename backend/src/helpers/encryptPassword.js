import bcrypt from 'bcrypt';

/**
 * @description Função para encripitar a senha do usuario.
 * @param {string} password Senha do usuario.
 */
async function encryptPassword(password) {
    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(password, salt);

    return hashPassword;
}

export default encryptPassword;