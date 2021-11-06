/** @module generateEmojiArray */
import fs from 'fs'

/**
 * Return an array with all numbers from `start` to `end`
 * 
 * @param {number} start The first number to be in the Array
 * @param {number} end  The last number to be in the Array
 * @returns {number[]} An Array with all consecutive numbers as elements, ranging from `start` to `end`
 */
Array.range = (start, end) => Array.from(
  { length: (end - start) },
  (v, k) => k + start
)

/**
 * Synchronously generate an array of emojis from a given Unicode emoji-data input file.
 * 
 * @param {string} [filename=emoji-data.txt] filename The file to read the emoji definition from
 * @returns {Array} An array of emojis
 */
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
