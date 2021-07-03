import { IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator";

export class CreateTaskDto {
    @IsNotEmpty()
    @IsNumber()
    readonly id: number
    @IsString()
    readonly start_date: string;
    @IsString()
    readonly text: string
    @IsNumber()
    readonly progress: number;
    @IsNumber()
    readonly duration: number;
    @IsOptional()
    readonly parent?: number;
}