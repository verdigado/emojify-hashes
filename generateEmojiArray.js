import fs from 'fs'

Array.range = (start, end) => Array.from(
  { length: (end - start) },
  (v, k) => k + start
)

export default function generateEmojiArray (filename = 'emoji-data.txt') {
  const file = fs.readFileSync(
    filename,
    { encoding: 'utf8', flag: 'r' }
  ).split('\n')
  const delimiter = '..'
  const emojis = []

  file.forEach(line => {
    if (
      line.includes('# E14.0') // Exclude newer emojis for better compatibility
      || line === ''
      || line.startsWith('#')
    ) {
      return
    }
    const codepoints = line.split(' ')[0].split(delimiter)

    if (codepoints.length > 1) {
      emojis.push(
        ...Array.range(
          parseInt(codepoints[0], 16),
          parseInt(codepoints[1], 16)
        )
      )
    } else {
      emojis.push(
        parseInt(codepoints[0], 16)
      )
    }
  })

  return emojis.map(e => String.fromCodePoint(e))
}
