import Task, { TaskDocument, TaskAttributes } from '../infra/mongoose/schemas/Task';
import Service from '../interfaces/Service';

interface IRequest {
  id: string;
  title: string; 
  description: string;
}

class UpdateTaskService implements Service<TaskAttributes, IRequest>{
  async execute({ id, title, description }: IRequest): Promise<IRequest> {
    await Task.findByIdAndUpdate(id, {
      title, description
    });
    return {id, title, description};
  }
}

export default UpdateTaskService;