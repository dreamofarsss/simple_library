const {pgQuery} = require('../config/db')

const createUser = async(req, res, next) => {
    const {username, email, password} = req.body;
    const result = await pgQuery(`INSERT INTO users`)
}