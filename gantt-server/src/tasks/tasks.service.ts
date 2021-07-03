import { Injectable } from '@nestjs/common';
import { Task } from './entities/task';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, QueryOptions } from 'mongoose';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private readonly taskModel: Model<Task>) { }

    async getAllTasks(): Promise<Task[]> {
        return await this.taskModel.find()
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        return await this.taskModel.create(createTaskDto);
    }

    async updateTask(updateTaskDto: UpdateTaskDto): Promise<Task> {
        const options: QueryOptions = { new: true, upsert: true };
        const { _id } = updateTaskDto
        return await this.taskModel.findByIdAndUpdate(_id, updateTaskDto, options)
    }

    async removeTask(id: number): Promise<Task> {
        return await this.taskModel.findOneAndRemove({ 'id': id })
    }
}
