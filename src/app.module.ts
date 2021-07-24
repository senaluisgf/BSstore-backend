import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { DogModule } from './dog/dog.module';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from './environments';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [
    CatModule,
    DogModule,
    MongooseModule.forRoot(environment.database.mongo.uri),
    // MongooseModule.forRootAsync({
    //   imports:[ConfigModule],
    //   useFactory: async (configService: ConfigService) =>({
    //     uri: configService.get<string>('MONGO_URI')
    //   }),
    //   inject: [ConfigService]
    // }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
