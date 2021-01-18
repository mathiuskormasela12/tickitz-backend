// ===== Filter Data
module.exports = (movies, keyword, by, defaultKeyword) => {
  return movies.filter(movie => {
    return movie[by || defaultKeyword]
      .toLowerCase()
      .includes(keyword.toLowerCase())
  })
}
