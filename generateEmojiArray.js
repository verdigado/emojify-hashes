import fs from 'fs'
import util from 'util' // Use util.inspect() instead of JSON.stringify() to produce an output easier to copy & paste ;-)

Array.range = (start, end) => Array.from(
  { length: (end - start) },
  (v, k) => k + start
)

const file = fs.readFileSync(
  './emoji-data.txt',
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

console.log(
  util.inspect(
    emojis.map(e => String.fromCodePoint(e)), // Convert code points to unicode chars
    {
      maxArrayLength: Infinity,
      breakLength: Infinity,
      compact: true
    }
  ),
  '\n',
  emojis.length,
  'elements'
)
