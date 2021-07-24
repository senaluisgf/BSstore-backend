import { registerAs } from "@nestjs/config";

export default registerAs('database', () => ({
    mongo: process.env.DATABASE_URL
}))