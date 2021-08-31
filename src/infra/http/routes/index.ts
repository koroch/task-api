import { Router, Request, Response } from 'express';
import tasksRouter from './tasks.routes';

const router = Router();

router.use('/task', tasksRouter);

router.get('/', (req: Request, res: Response) => {
    res.render('index');
});

export default router;


