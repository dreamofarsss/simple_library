const bcrypt = require('bcrypt')

const hashPassword = async(req, res, next) => {
    req.body.password = await bcrypt.hash(req.body.password, 10);
}

module.exports = hashPassword;
