import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { DogModule } from './dog/dog.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CatModule,
    DogModule,
    MongooseModule.forRoot(
      'mongodb+srv://bsstore:BSStore@cluster0.aebtc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
