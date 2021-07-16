import { Body, Controller, Get, Post } from '@nestjs/common'
import { CatService } from './cat.service';
import { CreateCatDTO } from './dtos/create-cat.dto';

@Controller('cats')
export class CatController{
    constructor(private catService: CatService){}

    @Get()
    pegaGatos(){
        return this.catService.getCats()
    }

    @Post()
    criaGato(@Body() cat: CreateCatDTO){
        return this.catService.createCat(cat)
    }
}
