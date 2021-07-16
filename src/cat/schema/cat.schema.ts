import { Schema } from 'mongoose'

export const catSchema = new Schema(
    {
        name: {type: String},
        color: {type: String},
        age: {type: Number}
    },
    {timestamps: true, collection:"cats"}
)