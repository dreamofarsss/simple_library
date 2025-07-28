const pg = require('pg')
const SETTINGS = require('./settings')

const connectToPostgres = async() => {
    const pgAdminClient = new pg.Client({
        user: SETTINGS.PG_USER || 'postgres',
        host: SETTINGS.PG_HOST || 'localhost',
        database: 'postgres',
        password: SETTINGS.PG_PASSWORD || ' ',
        port: SETTINGS.PG_PORT || '5432'
    })
    try {
        await pgAdminClient.connect()
        const currentTime = await pgAdminClient.query(`SELECT NOW()`) 
        console.log(`Successfully connected to posrgres in admin mode!`)
        console.log(`Current time: ${currentTime.rows[0].now}`)
        const result = await pgAdminClient.query(`SELECT 1 FROM pg_database WHERE datname = $1`, [SETTINGS.PG_DATNAME])
        if(result.rowCount === 0){
            await pgAdminClient.query(`CREATE DATABASE ${SETTINGS.PG_DATNAME}`)
            console.log('Database created succesfully!')
        }else{
            console.log(`Database with that name already exists! please delete that datbase before starting this API or use another database`);
            process.exit(1);
        }
    } catch(err){
        console.log(`Failed to configurage Postgres.\nError: ${err}`)
        process.exit(1)
    }finally{
        pgAdminClient.end();
        console.log('Admin mode: Disconnected...')
    }
}

const pgPool = new pg.Pool({
    user: SETTINGS.PG_USER || 'postgres',
    host: SETTINGS.PG_HOST || 'localhost',
    database: SETTINGS.PG_DATNAME,
    password: SETTINGS.PG_PASSWORD || ' ',
    port: SETTINGS.PG_PORT || '5432'
})

process.on('SIGINT', async() => {
    await pgPool.end()
    process.exit(0)
})

const pgQuery = async(text, data) => {
    try{
        return await pgPool.query(text, data)
    }catch(err){
        console.log(`Failed: can't handle your query.\nError: ${err}`)
    }
}

module.exports = {connectToPostgres, pgQuery}