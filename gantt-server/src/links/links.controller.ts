import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { MongoidPipe } from 'src/pipes/mongoid.pipe';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { Link } from './entities/link';
import { LinksService } from './links.service';

@Controller('links')
export class LinksController {
    constructor(private linksService: LinksService){}

    @Get()
    async getAllLinks() : Promise<Link[]> {
        return await this.linksService.getAllLinks();
    }

    @Post()
    async createLink(@Body() createLinkDto: CreateLinkDto): Promise<Link>  {
        console.log(createLinkDto);
        return await this.linksService.createLink(createLinkDto);
    }

    @Put()
    async updateLink(@Body() updateLinkDto: UpdateLinkDto) : Promise<Link> {
        return await this.linksService.updateLink(updateLinkDto);
    }

    @Delete(':id')
    async removeLink(@Param('id') id: number) : Promise<Link> {
        console.log(id);
        return await this.linksService.removeLink(id);
    }
}
