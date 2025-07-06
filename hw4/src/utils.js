export function getRandomNumber(minNumber, maxNumber) {
  if (!Number.isFinite(minNumber) || !Number.isFinite(maxNumber))
    throw new TypeError('A minNumber and a maxNumber must be a number')

  return minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
}

export const getURLSearchParams = (param) =>
  new URLSearchParams(window.location.search).get(param)

export function normalizeString(str) {
  return typeof str === 'string' ? str.trim().toLowerCase() : null
}

export const getFunctionBody = (func) => {
  let entire = func.toString()

  return entire.slice(entire.indexOf('{') + 1, entire.lastIndexOf('}'))
}

export function toUpperCaseFirstLetterEveryWord(str) {
  try {
    const strRes = str.toLowerCase()
    const wordArr = strRes.split(' ')
    wordArr.forEach(
      (word, i, arrRef) =>
        (arrRef[i] = word[0].toUpperCase() + word.substring(1))
    )
    return wordArr.join(' ')
  } catch (error) {
    console.log(error)
  }
}

export const limitString = (str, numChar, mark = '...') =>
  str.substring(0, numChar) + (str.length > numChar ? mark : '')

export const truncateStringFullWords = (str, max, suffix = '...') => {
  return str.length < max
    ? str
    : `${str.substr(
        0,
        str.substr(0, max - suffix.length).lastIndexOf(' ')
      )}${suffix}`
}

export function deepFreeze(object) {
  Object.keys(object).forEach((prop) => {
    if (typeof object[prop] === 'object' && object[prop] !== null) {
      deepFreeze(object[prop])
    }
  })
  return Object.freeze(object)
}
