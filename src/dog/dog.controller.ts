import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DogService } from './dog.service';
import { CreateDogDTO } from './dtos/create-dog.dto';

@Controller('dogs')
@ApiTags('Dog')
export class DogController {
  constructor(private dogService: DogService) {}

  @Get()
  getDog() {
    return this.dogService.getDogs();
  }

  @Post()
  createDog(@Body() dog: CreateDogDTO) {
    return this.dogService.createDog(dog);
  }
}
