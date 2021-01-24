// ===== Auth Controller
// Import all modules
const bcrypt = require('bcryptjs')
const response = require('../helpers/response')
const jwt = require('jsonwebtoken')
const upload = require('../helpers/upload')

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
          if (req.body.role !== 'admin') {
            const title = 'Register Successfully'
            const message = `<div>
              <h2>Please activeted your account, with the link below :</h2>
              <p>
                <a href="${process.env.APP_URL}/auth/active?id=${results.id}&email=${req.body.email}">Active Now !</a> 
              </p>
            </div>`
            sendMail(req.body.email, title, message)
          }
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

exports.forgotPassword = async (req, res) => {
  try {
    const results = await users.getUserByCondition({
      email: req.body.email
    })
    const title = 'Forgot Password'
    const message = `<div>
                <h2>Let's edit yout password, with the link below :</h2>
                <p>
                  <a href="${process.env.APP_URL}/auth/password/${results[0].id}/${req.body.email}">${process.env.APP_URL}/auth/password/${results[0].id}/${req.body.email}</a> 
                </p>
              </div>`
    sendMail(req.body.email, title, message)
    return response(res, 200, true, 'Check your email please for edit your password')
  } catch (err) {
    console.log(err)
    return response(res, 500, false, 'Server Error')
  }
}

exports.editPassword = async (req, res) => {
  if (req.body.password.length > 15 || req.body.password.length < 5) {
    return response(res, 400, false, 'Password min 5 character and max 15 character')
  } else if (req.body.password.match(/[a-z]/g) === null || req.body.password.match(/\d/g) === null || req.body.password.match(/[A-Z]/g) === null || req.body.password.match(/[^a-z0-9]/gi) === null) {
    return response(res, 400, false, 'Password must include lower case and uppercase letters, numbers and symbol')
  }

  try {
    const hash = await bcrypt.hash(req.body.password, 8)
    const body = { password: hash }
    const results = await users.update(req.params.id, req.params.email, body)

    if (!results) {
      return response(res, 400, false, 'Failed to edit password')
    } else {
      return response(res, 200, true, 'Password has been updated')
    }
  } catch (err) {
    console.log(err)
    return response(res, 500, false, 'Server Error')
  }
}

exports.editUser = async (req, res) => {
  try {
    const previousResult = await users.getUserByCondition({
      id: req.params.id
    })
    let poster = previousResult[0].poster
    if (req.files) {
      poster = await upload(req, 'profile photo')

      if (typeof poster === 'object') {
        return response(res, poster.status, poster.success, poster.message)
      }
    }

    const hash = await bcrypt.hash(req.body.password, 8)
    const body = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: hash,
      poster,
      phone: req.body.phone
    }
    const results = await users.update(req.params.id, req.body.email, body)

    if (!results) {
      return response(res, 400, false, 'Failed to edit user account')
    } else {
      return response(res, 200, true, 'Your account has been updated')
    }
  } catch (err) {
    console.log(err)
    return response(res, 500, false, 'Server Error')
  }
}

exports.getUserByid = async (req, res) => {
  try {
    const result = await users.getUserByCondition({
      id: req.params.id
    })

    if (!result) {
      return response(res, 400, false, `User with id ${req.params.id} unavailable`)
    } else {
      return response(res, 200, true, 'Successfully to get user with id ' + req.params.id, result[0])
    }
  } catch (err) {
    console.log(err)
    return response(res, 500, false, 'Server Error')
  }
}
