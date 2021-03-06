// ===== Response
module.exports = (res, status, success, message, results, ...optionalProperty) => {
  const [prevMovie, nextMovie, currentPage] = optionalProperty

  if (results && Array.isArray(results)) {
    return res.status(status).json({
      success,
      message,
      results,
      pageInfo: {
        length: results.length,
        previousMovie: optionalProperty ? prevMovie : null,
        nextMovie: optionalProperty ? nextMovie : null,
        currentPage: optionalProperty ? currentPage : null
      }
    })
  } else if (results && !Array.isArray(results)) {
    return res.status(status).json({
      success,
      message,
      results
    })
  } else {
    return res.status(status).json({
      success,
      message
    })
  }
}
