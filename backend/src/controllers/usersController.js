import validateIfUserExists from '../helpers/validateIfUserExists.js';
import encryptPassword from '../helpers/encryptPassword.js';
import User from '../models/usersModels.js';

async function createUsers(req, res) {
    const { name, email, password, accessLevel } = req.body;

    if(!name) {
        return res.status(422).json({ status: false, msg: "O campo 'name' é obrigatorio!" });
    }

    if(!email) {
        return res.status(422).json({ status: false, msg: "O campo 'email' é obrigatorio!" });
    }

    if(!password) {
        return res.status(422).json({ status: false, msg: "O campo 'password' é obrigatorio!" });
    }

    if(!accessLevel) {
        return res.status(422).json({ status: false, msg: "O campo 'accessLevel' é obrigatorio!" });
    }

    //Verifica se o usuario já esta cadastrado
    const userExist = await validateIfUserExists(email);

    if(userExist.status) {
        return res.status(422).json({ status: false, msg: "Por favor utilize outro email, esse já esta em uso!" });
    }

    //Encripitar senha
    const hashPassword = await encryptPassword(password);

    //Criar Usuario
    const user = new User({
        name,
        email,
        password: hashPassword,
        accessLevel
    });

    try {
        await user.save();

        return res.status(201).json({ status: true, msg: "Usuario cadastrado com sucesso!" });
    } catch (error) {
        console.log(`Erro ao cadastrar usuario: ${error}`);
        
        return res.status(500).json({ msg: `Erro no servidor, por favor tente novamente mais tarde!` });
    }
}

export default {
    createUsers
}