import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class CreateLinkDto {
    @IsNotEmpty()
    @IsNumber()
    readonly id: number
    @IsNumber()
    readonly source: number;
    @IsNumber()
    readonly target: number;
    @IsString()
    readonly type: string;
}