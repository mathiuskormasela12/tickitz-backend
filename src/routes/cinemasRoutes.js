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

router.get('/', auth, cinemaController.getAll)
router.get('/:id', auth, cinemaController.getCinemaById)
router.post('/', auth, isAddCinemaFill, cinemaController.create)
router.put('/', auth, isAddCinemaFill, cinemaController.create)
router.delete('/:id', auth, cinemaController.remove)
router.patch('/:id', auth, cinemaController.edit)

module.exports = router
