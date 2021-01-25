// ===== Cinemas Routes
// import all modules
const express = require('express')
const upload = require('express-fileupload')
const config = require('../config/config')

// import cinema controller
const cinemaController = require('../controllers/cinemasController')

// import middlewares
const isFormFill = require('../middlewares/isFormFill')
const auth = require('../middlewares/auth')

const isAddCinemaFill = isFormFill(...config.addCinemasBody)

// init router
const router = express.Router()

// setup express file upload
router.use(upload(config.uploadOptions))

router.get('/', auth.isAdmin, cinemaController.getAll)
router.get('/:id', auth.isAdmin, cinemaController.getCinemaById)
router.post('/', auth.isAdmin, isAddCinemaFill, cinemaController.create)
router.put('/', auth.isAdmin, isAddCinemaFill, cinemaController.create)
router.delete('/:id', auth.isAdmin, cinemaController.remove)
router.patch('/:id', auth.isAdmin, cinemaController.edit)

module.exports = router
