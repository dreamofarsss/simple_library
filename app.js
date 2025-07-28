require('dotenv').config()
const express = require('express')
const {connectToPostgres, pgQuery} = require('./config/db')
const SETTINGS = require('./config/settings')

const app = express()
startServer();

app.use(express.json())
app.use('/user', require('./routes/users.js'))


app.use(require('./middlewares/errorHandler'))

async function startServer(){
    try{
        await connectToPostgres()        
        app.listen(SETTINGS.PORT, () => {
            console.log(`Server running at port ${SETTINGS.PORT}`)
        })
    }catch(err){
        console.log(`Failed: Can't start the server`)
    }

    require('./models/userModel')()
    require('./models/bookModel')() 
}


