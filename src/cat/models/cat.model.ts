import { Document } from 'mongoose'

export class CatModel extends Document{
    name: string
    color: string
    age: number
}