const {pgQuery} = require('../config/db')

const createTableUsers = async() => {
    try{
        await pgQuery(`
            CREATE TABLE IF NOT EXISTS users(
                user_id SERIAL PRIMARY KEY,
                username VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL UNIQUE,
                password VARCHAR(100) NOT NULL
            );
        `)
    }catch(err){
        console.log(`Failed to create table users.\nError: ${err}`)
    }
}

module.exports = createTableUsers