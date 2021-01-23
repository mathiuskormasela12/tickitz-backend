// ===== Auth Controller
// Import all modules
const bcrypt = require('bcryptjs')
const response = require('../helpers/response')
const jwt = require('jsonwebtoken')

// Import model
const users = require('../models/UserModel')

// Import helpers
const sendMail = require('../helpers/mailer')

// Secret Key
const { SECRET } = process.env

exports.login = async (req, res) => {
  try {
    const isExist = await users.getUserByCondition({ email: req.body.email })

    if (!isExist || !(await bcrypt.compare(req.body.password, isExist[0].password))) {
      return response(res, 400, false, 'Wrong email or password')
    } else if (!isExist[0].activated) {
      return response(res, 400, false, "Your account haven't active")
    } else {
      const data = {
        id: isExist[0].id,
        username: isExist[0].username
      }
      const token = jwt.sign(data, SECRET, {
        expiresIn: '24h'
      })
      return response(res, 200, true, 'Login successfully', { token })
    }
  } catch (err) {
    console.log(err)
    return response(res, 500, false, 'Server Error')
  }
}

exports.register = async (req, res) => {
  const password = await bcrypt.hash(req.body.password, 8)

  try {
    const isExist = await users.getUserByCondition({ email: req.body.email })

    if (!isExist) {
      try {
        const results = await users.create(req.body.email, password, req.body.role)

        if (!results) {
          return response(res, 400, false, 'Failed to register')
        } else {
          const title = 'Register Successfully'
          const message = `<div>
            <h2>Please activeted your account, with the link below :</h2>
            <p>
              <a href="${process.env.APP_URL}/auth/active?id=${results.id}&email=${req.body.email}">Active Now !</a> 
            </p>
          </div>`
          sendMail(req.body.email, title, message)
          return response(res, 200, true, 'Register successfully', results)
        }
      } catch (err) {
        console.log(err)
        return response(res, 500, false, 'Server Error')
      }
    } else {
      return response(res, 400, false, 'email already in used')
    }
  } catch (err) {
    console.log(err)
    return response(res, 500, false, 'Server Error')
  }
}

exports.activated = async (req, res) => {
  try {
    const isExist = await users.getUserByCondition({
      email: req.query.email,
      id: req.query.id
    })

    if (isExist) {
      try {
        const results = await users.update(req.query.id, req.query.email, { activated: true })

        if (!results) {
          return response(res, 400, false, 'Failed to activeted account')
        } else {
          return response(res, 200, true, 'Activeted account successfull')
        }
      } catch (err) {
        console.log(err)
        return response(res, 500, false, 'Server Error')
      }
    } else {
      return response(res, 400, false, 'unknown email or id')
    }
  } catch (err) {
    console.log(err)
    return response(res, 500, false, 'Server Error')
  }
}
