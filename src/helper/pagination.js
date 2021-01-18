// ===== Pagination
// import all modules
const filterData = require('./filterData')

module.exports = (data, query, defaultLimit, defaultKeyword, url, sendResults) => {
  const { page: currentPage = 1, limit = defaultLimit, keyword = '', by = '' } = query

  const paging = (Number(currentPage) * Number(limit)) - Number(limit)
  const offset = Number(limit) * Number(currentPage)

  const nextPage = ((Number(currentPage) + 1) * Number(limit)) - Number(limit)
  const nextPageOffset = Number(limit) * (Number(currentPage) + 1)

  const results = filterData(data, keyword, by, defaultKeyword).slice(paging, offset)
  const nextResults = filterData(data, keyword, by, defaultKeyword).slice(nextPage, nextPageOffset)

  const nextPageLink = nextResults.length > 0 ? `${process.env.APP_URL}/api/${url}?page=${Number(currentPage) + 1}` : null

  const prevPageLink = currentPage > 1 ? `${process.env.APP_URL}/api/${url}?page=${currentPage - 1}` : null

  sendResults(results, prevPageLink, nextPageLink)
}
