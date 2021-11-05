import assert from 'assert'
import emojify from '../emojify.js'
import { it } from 'mocha'

describe('emojify', function () {
  describe('README:', function () {
    it('works as stated in the example', function () {
      assert.deepEqual(
        emojify('f3d18279b58b78a7e41fc6ec93f00f4dde045463ec21a527714e65c30553a52d'),
        [ '🍸', '🥧', '🐏', '🐗' ]
      )
    })
  })
})
