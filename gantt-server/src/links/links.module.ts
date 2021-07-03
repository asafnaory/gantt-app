import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Link, LinkScheama } from './entities/link';
import { LinksController } from './links.controller';
import { LinksService } from './links.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Link.name,
        schema: LinkScheama,
      },
    ]),
  ],
  controllers: [LinksController],
  providers: [LinksService]
})
export class LinksModule {}
