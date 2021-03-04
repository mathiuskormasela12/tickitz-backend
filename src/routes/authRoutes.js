// ===== Auth Routes
// import all modules
const express = require('express')
const upload = require('express-fileupload')
const config = require('../config/config')

// import movie controller
const authController = require('../controllers/authController')

// import middlewares
const isFormFill = require('../middlewares/isFormFill')
const isAuthFormCorrect = require('../middlewares/isAuthFormCorrect')
const auth = require('../middlewares/auth')

const isLoginFill = isFormFill(...config.loginBody)
const isRegisterFill = isFormFill(...config.registerBody)
const isForgotPasswordFill = isFormFill(...config.forgotPasswordBody)
const isEditPasswordFill = isFormFill(...config.editPasswordBody)
const isEditUserFill = isFormFill(...config.editUserBody)

// init router
const router = express.Router()

// setup upload file
router.use(upload(config.uploadOptions))

router.post('/login', isLoginFill, isAuthFormCorrect, authController.login)
router.post('/register', isRegisterFill, isAuthFormCorrect, authController.register)
router.patch('/active', authController.activated)
router.post('/password', isForgotPasswordFill, authController.forgotPassword)
router.patch('/password/:id/:email', isEditPasswordFill, authController.editPassword)
router.patch('/user', auth.isUser, isEditUserFill, authController.editUser)
router.patch('/user/upload', auth.isUser, authController.uploadPhoto)
router.get('/user', auth.isUser, authController.getUserByid)

module.exports = router
