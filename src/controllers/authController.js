// ===== Auth Controller
// Import all modules
const bcrypt = require('bcryptjs')
const response = require('../helpers/response')

// Import model
const users = require('../models/UserModel')

exports.login = (req, res) => {

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

exports.login = async (req, res) => {
  // const password = await bcrypt.hash(req.body.password, 8)

  // try {
  //   const isExist = await users.getUserByemail(req.body.email)

  //   if (!isExist) {
  //     try {
  //       const results = await users.create(req.body.email, password)

  //       if (!results) {
  //         return response(res, 400, false, 'Failed to register')
  //       } else {
  //         return response(res, 200, true, 'Register successfully', results)
  //       }
  //     } catch (err) {
  //       console.log(err)
  //       return response(res, 500, false, 'Server Error')
  //     }
  //   } else {
  //     return response(res, 400, false, 'email already in used')
  //   }
  // } catch (err) {
  //   console.log(err)
  //   return response(res, 500, false, 'Server Error')
  // }
}
