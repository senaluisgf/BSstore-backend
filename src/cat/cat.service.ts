import { Injectable } from '@nestjs/common'

@Injectable()
export class CatService{
    getCats(){
        return 'all cats'
    }
}