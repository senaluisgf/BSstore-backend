import * as config from 'config'

export const environment = {
    database: {
        mongo: config.get<string>('DATABASE.MONGO')
    }
}