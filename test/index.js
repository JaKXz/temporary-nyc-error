import test from 'ava'
import lib from './../src/index'

test('should be able to generate coverage report', t => {
  return lib().then(result => {
    console.log('passed!')
  })
})
