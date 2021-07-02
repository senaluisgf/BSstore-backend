import { Injectable } from '@nestjs/common'

@Injectable()
export class DogService{
    getDogs(){
        return 'all all'
    }
    postDogs(name:string){
        return name
    }
}