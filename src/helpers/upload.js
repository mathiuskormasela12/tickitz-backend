module.exports = (req, name) => {
  if (!req.files) {
    return {
      status: 400,
      success: false,
      message: `Must upload ${name} poster`
    }
  }

  const photo = req.files.poster

  const extValid = /jpg|jpeg|png/gi
  const checkExt = extValid.test(photo.name.split('.').pop())
  const checkMime = extValid.test(photo.mimetype)

  if (!checkExt && !checkMime) {
    return {
      status: 400,
      success: false,
      message: 'what you upload is not an image'
    }
  }

  if (photo.size > 3000000) {
    return {
      status: 400,
      success: false,
      message: `${name} poster size max 3mb`
    }
  }

  let poster = photo.name.split('.')[0]
  poster += '-'
  poster += Date.now()
  poster += '.'
  poster += photo.name.split('.').pop().toLowerCase()

  photo.mv('./public/uploads/' + poster)
  return poster
}
