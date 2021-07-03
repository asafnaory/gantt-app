import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, QueryOptions } from 'mongoose';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { Link } from './entities/link'

@Injectable()
export class LinksService {
    constructor(@InjectModel(Link.name) private readonly linkModel: Model<Link>) { }


    async getAllLinks(): Promise<Link[]> {
        return await this.linkModel.find()
    }

    async createLink(createLinkDto: CreateLinkDto): Promise<Link> {
        return await this.linkModel.create(createLinkDto);
    }

    async updateLink(updateLinkDto: UpdateLinkDto): Promise<Link>  {
        const options: QueryOptions = { new: true, upsert: true };
        const { id } = updateLinkDto
        return await this.linkModel.findByIdAndUpdate(updateLinkDto, options)
    }

    async removeLink(id: number): Promise<Link>  {
        return await this.linkModel.findOneAndRemove({ 'id': id });
    }
}
