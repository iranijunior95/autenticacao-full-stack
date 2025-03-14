import User from "../models/usersModels.js";

/**
 * @description Função para validar se esse email já foi cadastrado.
 * @param {string} email Email do usuario.
 */
async function validateIfUserExists(email) {
    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return { status: true, user: userExist };
        }

        return { status: false, user: [] };
    } catch (error) {
        console.log(`Erro ao buscar usuario: ${error}`);

        return { status: false, user: [] };
    }
}

export default validateIfUserExists;