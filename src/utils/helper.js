export function serializeQueryString(queryParams) {
  return Object.keys(queryParams)
    .filter(
      key =>
        typeof queryParams[key] !== 'undefined' &&
        queryParams[key] !== null &&
        queryParams[key] !== '',
    )
    .map(key => `${key}=${encodeURIComponent(queryParams[key])}`)
    .join('&');
}