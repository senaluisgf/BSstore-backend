import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { environment } from 'src/environments';
import databaseConfig from 'src/environments/databaseConfig';
import { CreateCatDTO } from './dtos/create-cat.dto';
import { CatModel } from './models/cat.model';

@Injectable()
export class CatService {
  constructor(
    @InjectModel('CatModel') private catModel: Model<CatModel>,
    private configService: ConfigService,
    @Inject(databaseConfig.KEY)
    private dbConfig: ConfigType<typeof databaseConfig>
  ) {}

  async getCats() {
    return this.catModel.find();
  }

  async createCat(cat: CreateCatDTO) {
    try {
      const createdCat = await this.catModel.create(cat);
      return createdCat;
    } catch (erro) {
      throw new Error(erro.message);
    }
  }

  teste() {
      const trabalho = environment.database.mongo.uri
      const nest1 = this.configService.get<string>('database.mongo.uri')
      const nest2 = this.dbConfig.mongo.uri
      return {trabalho, nest1, nest2}
  }
}
