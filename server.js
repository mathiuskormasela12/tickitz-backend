// ===== Server
// Import all modules
const express = require('express')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')

// setup dotenv
dotenv.config({ path: '.env' })

// init app
const app = express()

// destructuring env
const { PORT = 3000, APP_URL: URL } = process.env

// setup helmet
app.use(helmet())

// setup compression
app.use(compression())

// setup morgan
app.use(morgan('dev'))

// setup url encoded & json
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', require('./src/routes/routes'))

app.listen(PORT, () => {
  console.log(`Web Service running at ${URL}`)
})
