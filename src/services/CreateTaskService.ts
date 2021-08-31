import Task, { TaskDocument, TaskAttributes } from '../infra/mongoose/schemas/Task';
import Service from '../interfaces/Service';

class CreateTaskService implements Service<TaskAttributes, TaskDocument>{
  async execute({ title, description }: TaskAttributes): Promise<TaskDocument> {
    const task = new Task({ title, description });
    return await task.save();
  }
}

export default CreateTaskService;