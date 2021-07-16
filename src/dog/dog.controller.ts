import { Controller, Get, Param, Post } from '@nestjs/common';
import { DogService } from './dog.service';

@Controller('dogs')
export class DogController {
  constructor(private dogService: DogService) {}

  @Get()
  getDog() {
    return this.dogService.getDogs();
  }
  @Post(':name')
  postDog(@Param('name') name: string) {
    return this.dogService.postDogs(name);
  }
}
