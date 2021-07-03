import { Schema ,Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task { 
    @Prop({required: true})id: number;
    @Prop()start_date: string;
    @Prop()text: string;
    @Prop()progress: number;
    @Prop()duration: number;
    @Prop()parent?: number;
}

export const TaskScheama = SchemaFactory.createForClass(Task)
