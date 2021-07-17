import { ApiProperty } from "@nestjs/swagger"

export class CreateCatDTO{
    @ApiProperty()
    name: string
    @ApiProperty()
    color: string
    @ApiProperty()
    age: number
}