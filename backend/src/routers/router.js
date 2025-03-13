import { Router } from "express";

const useRouter = Router();

useRouter.get('/', (req, res) => {
    return res.status(200).json({ msg: 'Rota esta funcionando' });
});

export default useRouter;