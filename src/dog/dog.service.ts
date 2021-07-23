import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDogDTO } from './dtos/create-dog.dto';
import { DogModel } from './model/dog.model';
@Injectable()
export class DogService {
  constructor(@InjectModel('DogModel') private dogModel: Model<DogModel>) {}

  async getDogs() {
    const dogs = await this.dogModel.find();
    return dogs;
  }

  async createDog(dog: CreateDogDTO) {
    try {
      if (dog.name) {
        const createdDog = await this.dogModel.create(dog);
        return createdDog;
      } else {
        throw new Error('Name of dog is not valid');
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
