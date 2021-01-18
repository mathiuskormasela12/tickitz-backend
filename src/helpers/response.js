// ===== Response
module.exports = (res, status, success, message, results, ...optionalProperty) => {
  const [prevMovie, nextMovie] = optionalProperty

  if (results) {
    return res.status(status).json({
      success,
      message,
      results,
      previousMovie: optionalProperty ? prevMovie : null,
      nextMovie: optionalProperty ? nextMovie : null
    })
  } else {
    return res.status(status).json({
      success,
      message
    })
  }
}
