import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from '@nestjs/common';
import { MongoidPipe } from 'src/pipes/mongoid.pipe';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }
    @Get()
    async getAllTasks(): Promise<Task[]> {
        return await this.tasksService.getAllTasks();
    }

    @Post()
    async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        console.log(createTaskDto);
        const task = await this.tasksService.createTask(createTaskDto);
        return task
    }

    @Put()
    async updateTask(@Body() updateTaskDto: UpdateTaskDto): Promise<Task> {
        console.log(updateTaskDto);
        return await this.tasksService.updateTask(updateTaskDto);
    }

    @Delete(':id')
    async removeTask(@Param('id') id: number): Promise<Task> {
        return await this.tasksService.removeTask(id);
    }
}
