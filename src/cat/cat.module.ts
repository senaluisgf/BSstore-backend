import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { catSchema } from './schema/cat.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{name:"CatModel", schema: catSchema }])
    ],
    controllers: [CatController],
    providers: [CatService]
})
export class CatModule{}