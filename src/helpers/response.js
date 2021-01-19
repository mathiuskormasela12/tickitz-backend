// ===== Response
module.exports = (res, status, success, message, results, ...optionalProperty) => {
  const [prevMovie, nextMovie] = optionalProperty

  if (results) {
    return res.status(status).json({
      success,
      message,
      results,
      pageInfo: {
        length: results.length,
        previousMovie: optionalProperty ? prevMovie : null,
        nextMovie: optionalProperty ? nextMovie : null
      }
    })
  } else {
    return res.status(status).json({
      success,
      message
    })
  }
}
