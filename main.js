import emojify from './emojify.js'
import Sha256 from './Sha256.js'
import readline from 'readline'

console.log('Type something in to generate it\'s sha256 hash and an emoji representation of that.')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'toSha256ToEmoji> '
})

rl.prompt()

rl.on('line', (line) => {
  const hash = Sha256.hash(line.trim())
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
