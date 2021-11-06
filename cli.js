import emojify from './emojify.js'
import crypto from 'crypto'
import readline from 'readline'

console.log('Type something in to generate it\'s sha256 hash and an emoji representation of that.')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'toSha256ToEmoji> '
})

rl.prompt()

rl.on('line', (line) => {
  const hash = crypto.createHash('sha256').update(line.trim()).digest('hex')
  const emojis = emojify(hash)

  console.log(
    hash,
    emojis
  )

  rl.prompt()
}).on('close', () => {
  console.log('Have a great day!')
  process.exit(0)
})
