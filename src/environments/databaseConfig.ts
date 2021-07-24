import { registerAs } from "@nestjs/config";

export default registerAs('database', () => ({
    mongo: {
        uri: process.env.MONGO_URI
    }
}))