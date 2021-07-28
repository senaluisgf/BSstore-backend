import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { DogModule } from './dog/dog.module';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from './environments';


@Module({
  imports: [
    CatModule,
    DogModule,
    MongooseModule.forRoot(environment.database.mongo.uri),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
