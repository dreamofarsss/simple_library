const {Router} = require('express')
const createUser = require('../controllers/userController')
const validateUser = require('../middlewares/validateUser')
const hashPassword = require('../middlewares/hashPassword')

const router = Router()
router.post('/', validateUser, hashPassword, )