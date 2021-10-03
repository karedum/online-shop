const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const checkRole = require('../middleware/checkRoleMiddleware')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', authMiddleware, basketController.getBasket)
router.get('/count', authMiddleware, basketController.getBasketCount)
router.post('/add', authMiddleware, basketController.addProduct)
router.delete('/delete/:id', authMiddleware, basketController.deleteProduct)


module.exports = router