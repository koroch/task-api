import { Router, Request, Response } from 'express';
import CreateTaskService from '../../../services/CreateTaskService';
import DeleteTaskService from '../../../services/DeleteTaskService';
import ListTasksService from '../../../services/ListTasksService';
import UpdateTaskService from '../../../services/UpdateTaskService';

const tasksRouter = Router();

tasksRouter.post('/create', async (req: Request, res: Response) => {
    const { title, description } = req.body;
    const createTask = new CreateTaskService();
    const task = await createTask.execute({ title, description });
    return res.json(task);
});

tasksRouter.get('/list', async (req: Request, res: Response) => {
    const listTasks = new ListTasksService();
    const tasks = await listTasks.execute();
    return res.json(tasks);
});

tasksRouter.delete('/delete/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const deleteTask = new DeleteTaskService();
    const result = await deleteTask.execute({ id });
    return res.json(result);
});  

tasksRouter.put('/edit/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const updateTask = new UpdateTaskService();
    const taskUpdated = await updateTask.execute({id, title, description});
    return res.json(taskUpdated);
});

export default tasksRouter;