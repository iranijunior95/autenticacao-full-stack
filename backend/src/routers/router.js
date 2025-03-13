import { Router } from "express";

const useRouter = Router();

useRouter.get('/', (req, res) => {
    return res.status(200).json({ status: true, msg: 'Rota Inicial' });
});

export default useRouter;