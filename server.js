// ===== Server
// Import all modules
const express = require('express')
const dotenv = require('dotenv')
const helmet = require('helmet')
const compression = require('compression')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

// setup dotenv
dotenv.config()

// destructuring env
const { PORT } = process.env

// init app
const app = express()

// setup urlencoded & json
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// setup static file
app.use(express.static(path.join(__dirname, './public')))

// setup morgan, compression & helmet
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

// define client
const clients = [
  'http://127.0.0.1:3000',
  'http://localhost:3000',
  'http://192.168.1.32:3000'
]

// setup cors options
const corsOptions = {
  origin: function (origin, callback) {
    if (clients.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Blocked by cors'))
    }
  }
}

// use cors options
app.use(cors(corsOptions))

app.use('/api', require('./src/routes/userRoutes'))
app.use('/api/admin/movies', require('./src/routes/moviesRoutes'))
app.use('/api/admin/genres', require('./src/routes/genresRoutes'))
app.use('/api/admin/cinemas', require('./src/routes/cinemasRoutes'))
app.use('/api/auth', require('./src/routes/authRoutes'))
app.use('/api/transaction', require('./src/routes/transaction'))
app.use('/api', require('./src/routes/ticketRoutes'))

app.listen(PORT, () => {
  console.log(`App running at http://127.0.0.1:${PORT}/api`)
})
