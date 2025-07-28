const {pgQuery} = require('../config/db')

const createTableBooks = async() => {
    try{
        await pgQuery(`
            CREATE TABLE IF NOT EXISTS books(
                book_id SERIAL PRIMARY KEY,
                title VARCHAR(100) NOT NULL,
                author VARCHAR(100) NOT NULL,
                genre VARCHAR(100),
                description TEXT
            );
        `)
    }catch(err){
        console.log(`Failed to create table books.\nError: ${err}`)
    }
}

module.exports = createTableBooks