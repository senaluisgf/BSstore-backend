import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { environment } from 'src/environments';
import { CreateCatDTO } from './dtos/create-cat.dto';
import { CatModel } from './models/cat.model';

@Injectable()
export class CatService {
  constructor(
    @InjectModel('CatModel') private catModel: Model<CatModel>,
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
      return {trabalho}
  }
}
