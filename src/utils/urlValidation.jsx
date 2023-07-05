export default function urlValidation(url) {
  if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
    return url
  } else {
    return 'http://' + url
  }
}
