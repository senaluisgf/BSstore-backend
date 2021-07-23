import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';
import { dogSchema } from './schema/dog.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'DogModel', schema: dogSchema }]),
  ],
  controllers: [DogController],
  providers: [DogService],
})
export class DogModule {}
