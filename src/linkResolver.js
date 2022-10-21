export function linkResolver(document) {
  if (document.type === 'projecten') {
    return '/projecten/' + document.uid
  }

  return '/'
}
