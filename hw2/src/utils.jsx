export function NewLineText({ text }) {
  return text.split('\n').map((str, i) => <p key={i}>{str}</p>)
}

export const truncateStringFullWords = (str, max, suffix = '...') => {
  return str.length < max
    ? str
    : `${str.substr(
        0,
        str.substr(0, max - suffix.length).lastIndexOf(' ')
      )}${suffix}`
}
