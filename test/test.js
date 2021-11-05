import assert from 'assert'
import emojify from '../emojify.js'

describe('emojify', function () {
  it('works as stated in the README\'s example', function () {
    assert.deepEqual(
      emojify('f3d18279b58b78a7e41fc6ec93f00f4dde045463ec21a527714e65c30553a52d'),
      [ '🍸', '🥧', '🐏', '🐗' ]
    )
  })

  it('works with a generic aplhabet', function () {
    assert.deepEqual(
      emojify('01af', [ 0, 1, 2, 3 ]),
      [ 0, 1, 2, 3 ]
    )
  })

  it('throws on other than hex input', function () {
    const input = '01afz'
    assert.throws(
      () => { emojify(input) },
      {
        name: 'RangeError',
        message: `Input "${input}" is not hexadecimal.`
      }
    )
  })
})
