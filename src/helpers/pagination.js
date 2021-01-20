
// ===== Pagination

module.exports = (data, query, defaultLimit, url, sendResults) => {
  const { page: currentPage = 1, limit = defaultLimit } = query

  const paging = (Number(currentPage) * Number(limit)) - Number(limit)
  const offset = Number(limit) * Number(currentPage)

  const nextPage = ((Number(currentPage) + 1) * Number(limit)) - Number(limit)
  const nextPageOffset = Number(limit) * (Number(currentPage) + 1)

  const results = data.slice(paging, offset)
  const nextResults = data.slice(nextPage, nextPageOffset)

  const nextPageLink = nextResults.length > 0 ? `${process.env.APP_URL}/${url}?page=${Number(currentPage) + 1}` : null

  const prevPageLink = currentPage > 1 ? `${process.env.APP_URL}/${url}?page=${currentPage - 1}` : null

  sendResults(results, prevPageLink, nextPageLink)
}
