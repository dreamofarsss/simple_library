const {body, validationResult} = require('express-validator')

const validateUser = [
    body('username').isLength({min: 3}).withMessage('Username must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid email!').normalizeEmail(),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    (req, res, next) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return next(errors.array())
        }
        next()
    }
]

module.exports = validateUser;