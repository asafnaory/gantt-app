import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { LinksModule } from './links/links.module';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';

// const MONGO_URI = 'mongodb://localhost:27017/gantt-demo';
const MONGO_URI = 'mongodb://gantt-mongodb:27017/gantt-demo';
const mongooseOptions: MongooseModuleOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}
@Module({
  imports: [MongooseModule.forRoot(MONGO_URI, mongooseOptions) , TasksModule, LinksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
