import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, Matches } from 'class-validator';
import { CreateLinkDto } from './create-link.dto';

export class UpdateLinkDto extends PartialType(CreateLinkDto) {}