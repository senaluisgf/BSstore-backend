import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateCatDTO } from './dtos/create-cat.dto'
import { CatModel } from './models/cat.model'

@Injectable()
export class CatService{
    constructor(@InjectModel('CatModel') private catModel: Model<CatModel>){}

    getCats(){
        return this.catModel.find()
    }

    async createCat(cat: CreateCatDTO){
        try{

            const createdCat =  await this.catModel.create(cat)
            return createdCat
        } catch(erro){
            throw new Error(erro.message)
        }
    }
}