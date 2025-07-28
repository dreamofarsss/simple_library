const {pgQuery} = require('../config/db')

const createTableRental = async() => {
    try{
        await pgQuery(`
            CREATE TABLE IF NOT EXISTS rentals(
                
            );
        `)
    }catch(err){
        console.log(`Failed to create table rentals.\nError: ${err}`)
    }
}

module.exports = createTableRental