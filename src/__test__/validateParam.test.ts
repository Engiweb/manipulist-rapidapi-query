/* eslint no-console:0 */
import validateParam from '../validateParam'

describe('validateParam', () => {
  it('should return ok if no toolParam', () => {
    const param = ''
    const name = 'param1'
    const toolParam = undefined

    const output = validateParam({ name, param, toolParam })

    expect(output).toEqual({
      message: 'ok',
    })
  })

  it('should return error if not valid string', () => {
    const param = 3
    const name = 'param1'
    const toolParam = {
      type: 'string',
    }

    const output = validateParam({ name, param, toolParam })

    expect(output).toEqual({
      message: 'param1 is not a string',
    })
  })

  it('should return ok if valid string', () => {
    const param = 'string'
    const name = 'param1'
    const toolParam = {
      type: 'string',
    }

    const output = validateParam({ name, param, toolParam })

    expect(output).toEqual({
      message: 'ok',
    })
  })

  it('should return error if not valid enum', () => {
    const param = 'something'
    const name = 'param1'
    const toolParam = {
      type: 'string',
      enum: ['before', 'after'],
    }

    const output = validateParam({ name, param, toolParam })

    expect(output).toEqual({
      message: 'param1 is not valid; options are before | after',
    })
  })

  it('should return ok if valid enum', () => {
    const param = 'before'
    const name = 'param1'
    const toolParam = {
      type: 'string',
      enum: ['before', 'after'],
    }

    const output = validateParam({ name, param, toolParam })

    expect(output).toEqual({
      message: 'ok',
    })
  })

  it('should return error if not valid integer', () => {
    const param = 'string'
    const name = 'param1'
    const toolParam = {
      type: 'integer',
    }

    const output = validateParam({ name, param, toolParam })

    expect(output).toEqual({
      message: 'param1 is not a valid integer',
    })
  })

  it('should return ok if valid integer', () => {
    const param = 3
    const name = 'param1'
    const toolParam = {
      type: 'integer',
    }

    const output = validateParam({ name, param, toolParam })

    expect(output).toEqual({
      message: 'ok',
    })
  })

  it('should return error if not valid range', () => {
    const param = 'string'
    const name = 'param1'
    const toolParam = {
      type: 'range',
    }

    const output = validateParam({ name, param, toolParam })

    expect(output).toEqual({
      message: 'param1 does not contain a valid list/range of integers',
    })
  })

  it('should return ok if valid range', () => {
    const param = '3,5-7,9'
    const name = 'param1'
    const toolParam = {
      type: 'range',
    }

    const output = validateParam({ name, param, toolParam })

    expect(output).toEqual({
      message: 'ok',
    })
  })
})
