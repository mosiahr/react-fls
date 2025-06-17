function NewlineText({ text }) {
  return text.split(/\\n+/).map((str) => <p key={crypto.randomUUID()}>{str}</p>)
}

export default NewlineText
