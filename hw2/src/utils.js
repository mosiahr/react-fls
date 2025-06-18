export default function newLineText({ text }) {
  return text.split(/\\n+/).map((str) => <p key={crypto.randomUUID()}>{str}</p>)
}
