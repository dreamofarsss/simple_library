require('dotenv').config()

const SETTINGS = {
    PORT: process.env.PORT,
    PG_USER: process.env.DB_USER ,
    PG_PASSWORD: process.env.DB_PASSWORD,
    PG_DATNAME: process.env.PG_DATNAME,
    PG_PORT: process.env.PG_PORT,
    PG_HOST: process.env.PG_HOST
}

module.exports = SETTINGS;