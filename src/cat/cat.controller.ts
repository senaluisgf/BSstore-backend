import { Body, Controller, Get, Post, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger';
import { CatService } from './cat.service';
import { CreateCatDTO } from './dtos/create-cat.dto';

@Controller('cats')
@ApiTags('Cats')
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

    @Put()
    teste(){
        return this.catService.teste()
    }
}
