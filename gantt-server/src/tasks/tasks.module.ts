import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskScheama } from './entities/task';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Task.name,
        schema: TaskScheama,
      },
    ]),
  ],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
