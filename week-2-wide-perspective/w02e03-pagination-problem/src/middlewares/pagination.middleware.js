export function paginationMiddleware(skipName = 'skip', limitName = 'limit') {
  return (req, res, next) => {
    const { [skipName]: skip, [limitName]: limit } = req.query
    let computedSkip = 0
    if (skip) {
      computedSkip = Number(skip)
    }
    let computedLimit
    if (limit) {
      computedLimit = Number(limit)
    }
    req.pagination = {
      skip: computedSkip,
      limit: computedLimit,
    }
    next()
  }
}