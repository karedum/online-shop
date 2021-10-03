const Router = require('express')
const router = new Router()
const usersController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', usersController.registration)
router.post('/login', usersController.login)
router.get('/auth', authMiddleware, usersController.check)

module.exports = router