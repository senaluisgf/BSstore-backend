import * as config from 'config'

export const environment = {
    database: {
        mongo: {
            uri: config.get<string>('database.mongo.uri')
        }
    }
}