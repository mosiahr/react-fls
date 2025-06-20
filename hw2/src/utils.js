export function normalizeString(str) {
  return typeof str === 'string' ? str.trim().toLowerCase() : null
}
