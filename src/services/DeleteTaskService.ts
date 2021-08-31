import Task, { TaskDocument } from '../infra/mongoose/schemas/Task';
import Service from '../interfaces/Service';

interface IRequest {
  id: string;
}

class DeleteTasksService implements Service<IRequest, TaskDocument>{
  async execute({ id }: IRequest): Promise<TaskDocument> {
    return await Task.findByIdAndDelete(id);
  }
}

export default DeleteTasksService;