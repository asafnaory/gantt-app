import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, Matches } from 'class-validator';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    @IsNotEmpty({ message: 'mongo _id is required' })
    @Matches('^[0-9a-fA-F]{24}$', 'ig', {
      message: 'mongo _id is not a valid id',
    })
    readonly _id: string
}