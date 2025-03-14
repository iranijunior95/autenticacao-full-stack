import { Router } from "express";

import usersController from "../controllers/usersController.js";

const useRouter = Router();

//Rota inicial
useRouter.get('/', (req, res) => {
    return res.status(200).json({ status: true, msg: 'Rota Inicial' });
});

useRouter.post('/users', usersController.createUsers);

export default useRouter;