import { Document, Schema, Model, model } from 'mongoose';

    export type TaskAttributes = {
        title: string;
        description: string;
    };
  
    export type TaskDocument = Document & TaskAttributes;
  
    type TaskModel = Model<TaskDocument>;

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
        lowercase: true
    }
});

export default model<TaskDocument, TaskModel>('Task', TaskSchema);