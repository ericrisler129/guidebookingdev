export function constructUrl (url, params) {
  let returnUrl = url
  if (params) {
    returnUrl += '?'
    for (const key in params) {
      returnUrl += key + '=' + params[key] + '&'
    }
  }
  return returnUrl
}
