// ===== Auth Controller
// Import all modules
const bcrypt = require('bcryptjs')
const response = require('../helpers/response')
const jwt = require('jsonwebtoken')

// Import model
const users = require('../models/UserModel')

// Secret Key
const { SECRET } = process.env

exports.login = async (req, res) => {
  try {
    const isExist = await users.getUserByEmail(req.body.email)
    const isPasswordSame = await bcrypt.compare(req.body.password, isExist[0].password)

    if (!isPasswordSame || isExist.length < 1) {
      return response(res, 400, false, 'Failed to register')
    } else {
      const data = {
        id: isExist[0].id,
        username: isExist[0].username
      }
      const token = jwt.sign(data, SECRET, {
        expiresIn: '2m'
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
    const isExist = await users.getUserByEmail(req.body.email)

    if (!isExist) {
      try {
        const results = await users.create(req.body.email, password, req.body.role)

        if (!results) {
          return response(res, 400, false, 'Failed to register')
        } else {
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
