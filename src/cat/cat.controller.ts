import { Controller, Get } from '@nestjs/common'
import { CatService } from './cat.service';

@Controller('cats')
export class CatController{
    constructor(private catService: CatService){}

    @Get()
    pegaGatos(){
        return this.catService.getCats()
    }
}
