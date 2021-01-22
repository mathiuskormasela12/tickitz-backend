// ===== Auth Routes
// import all modules
const express = require('express')
const config = require('../config/config')

// import movie controller
const authController = require('../controllers/authController')

// import middlewares
const isFormFill = require('../middlewares/isFormFill')
const isAuthFormCorrect = require('../middlewares/isAuthFormCorrect')
const auth = require('../middlewares/auth')

const isLoginFill = isFormFill(...config.loginBody)
const isRegisterFill = isFormFill(...config.registerBody)

// init router
const router = express.Router()

router.post('/login', isLoginFill, isAuthFormCorrect, authController.login)
router.post('/register', auth, isRegisterFill, isAuthFormCorrect, authController.register)

module.exports = router
