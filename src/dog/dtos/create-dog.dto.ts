import { ApiProperty } from '@nestjs/swagger';

export class CreateDogDTO {
  @ApiProperty()
  name: string;
  @ApiProperty()
  breed: string;
  @ApiProperty()
  color: string;
  @ApiProperty({ type: Number })
  age: number;
}
