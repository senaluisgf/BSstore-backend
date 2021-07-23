import { Document } from 'mongoose';

export class DogModel extends Document {
  name: string;
  breed: string;
  color: string;
  age: number;
}
