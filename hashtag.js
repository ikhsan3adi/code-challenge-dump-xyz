function generateHashtag(str) {
  const filtered = str.split(' ').filter(e => e).map(e => {
    const firstLetter = e[0].toUpperCase()
    const capitalized = `${firstLetter}${e.substring(1)}`
    return capitalized
  }).join('')

  if (filtered.length > 140) return false
  if (!filtered) return false
  return `#${filtered}`
}

console.log(generateHashtag('Sussy Baka      hayu          a '));
