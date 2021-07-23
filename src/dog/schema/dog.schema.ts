import { Schema } from 'mongoose';

export const dogSchema = new Schema(
  {
    name: { type: String },
    breed: { type: String },
    color: { type: String },
    age: { type: Number },
  },
  { timestamps: true, collection: 'dogs' },
);
