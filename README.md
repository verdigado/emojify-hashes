# emojify-hashes

Crate a visualisation of a hash using unicode emoji!
⚠️ It currently supports only hexadecimal hashes.

```plain
Type something in to generate it's sha256 hash and an emoji representation of that.
toSha256ToEmoji> emojify-hashes
f3d18279b58b78a7e41fc6ec93f00f4dde045463ec21a527714e65c30553a52d [ '🍸', '🥧', '🐏', '🐗' ]
toSha256ToEmoji> something
3fc9b689459d738f8c88a3a48aa9e33542016b7a4052e001aaa536fca74813cb [ '🦷', '🥍', '⌨', '🧺' ]
toSha256ToEmoji> exceptional!
4fd8fe71f06f8a44b5fed64e6d358888d55ac3217b3ecf16424d54ddb0c0162d [ '🕐', '🍙', '🤥', '🔨' ]
toSha256ToEmoji> 
```

## Installation

```shell
npm i <path/to/this/project>
```

## Usage

For demonstrational purposes I bashed out a CLI which converts the entered values to sha256 and then emojifies it. Run it via `npm run cli` or `node main.js`. Exit it with for example with `Ctrl` + `C`.

To use the library in your own code, import and feed it!

```js
const Emojifier = require( 'emojify-hashes')

const hash = 'f3d18279b58b78a7e41fc6ec93f00f4dde045463ec21a527714e65c30553a52d' // sha256 of 'emojify-hashes'
const emojis = Emojifier.emojify(hash) // Returns [ '🍸', '🥧', '🐏', '🐗' ]
console.log(emojis.join('')) // Outputs 🍸🥧🐏🐗
```
