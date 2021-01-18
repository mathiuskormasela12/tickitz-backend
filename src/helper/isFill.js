module.exports = (req, reqBody) => {
  let result = ''

  for (const body in reqBody) {
    console.log(reqBody)
    if (!req.body[reqBody[body]]) {
      result += 'false'
    } else {
      result += 'true'
    }
  }

  return result
}
