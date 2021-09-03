/* eslint no-console:0 */
import validateParams from '../validateParams'

describe('validateParams', () => {
  it('should return ok for trim-lines', () => {
    const param1 = undefined
    const tool = 'trim-lines'
    const param2 = undefined

    const output = validateParams({ tool, param1, param2 })

    expect(output).toEqual({
      message: 'ok',
    })
  })

  it('should return error for wrong add-incremental-number param1', () => {
    const param1 = '3'
    const tool = 'add-incremental-number'
    const param2 = 'abc'

    const output = validateParams({ tool, param1, param2 })

    expect(output).toEqual({
      message: 'param1 is not a valid integer',
    })
  })

  it('should return error for wrong add-incremental-number param2', () => {
    const param1 = 3
    const tool = 'add-incremental-number'
    const param2 = 'abc'

    const output = validateParams({ tool, param1, param2 })

    expect(output).toEqual({
      message: 'param2 is not valid; options are atStart | atEnd',
    })
  })

  it('should return ok if valid add-incremental-number', () => {
    const param1 = 3
    const tool = 'add-incremental-number'
    const param2 = 'atStart'

    const output = validateParams({ tool, param1, param2 })

    expect(output).toEqual({
      message: 'ok',
    })
  })

  it('should return error for wrong add-prefix param1', () => {
    const param1 = 3
    const tool = 'add-prefix'
    const param2 = undefined

    const output = validateParams({ tool, param1, param2 })

    expect(output).toEqual({
      message: 'param1 is not a string',
    })
  })

  it('should return ok if valid add-prefix', () => {
    const param1 = 'test'
    const tool = 'add-prefix'
    const param2 = undefined

    const output = validateParams({ tool, param1, param2 })

    expect(output).toEqual({
      message: 'ok',
    })
  })

  it('should return error for wrong extract-columns param1', () => {
    const param1 = 'wrong-range'
    const tool = 'extract-columns'
    const param2 = 'abc'

    const output = validateParams({ tool, param1, param2 })

    expect(output).toEqual({
      message: 'param1 does not contain a valid list/range of integers',
    })
  })

  it('should return error for wrong extract-columns param2', () => {
    const param1 = '3,5-7,9'
    const tool = 'extract-columns'
    const param2 = 3

    const output = validateParams({ tool, param1, param2 })

    expect(output).toEqual({
      message: 'param2 is not a string',
    })
  })

  it('should return ok if valid extract-columns', () => {
    const param1 = '3,5-7,9'
    const tool = 'extract-columns'
    const param2 = ','

    const output = validateParams({ tool, param1, param2 })

    expect(output).toEqual({
      message: 'ok',
    })
  })
})
