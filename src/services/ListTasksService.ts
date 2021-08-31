import Task, { TaskDocument, TaskAttributes } from '../infra/mongoose/schemas/Task';
import Service from '../interfaces/Service';

class ListTasksService implements Service<TaskAttributes, TaskDocument[]>{
  async execute(): Promise<TaskDocument[]> {
    return await Task.find();
  }
}

export default ListTasksService;