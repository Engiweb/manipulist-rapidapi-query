/* eslint no-console:0 */
import integersListRangeChecker from '../integersListRangeChecker'

describe('integersListRangeChecker', () => {
  it('should return false when empty', () => {
    const param = ''
    const name = 'param1'

    const output = integersListRangeChecker({ param, name })

    expect(output).toEqual({
      message: 'param1 does not contain a valid list/range of integers',
    })
  })

  it('should return false when containing not valid char', () => {
    const param = '1,2,a-bc'
    const name = 'param1'

    const output = integersListRangeChecker({ param, name })

    expect(output).toEqual({
      message: 'param1 does not contain a valid list/range of integers',
    })
  })

  it('should return false when , and - subsequent', () => {
    const param = '1,2,-3'
    const name = 'param1'

    const output = integersListRangeChecker({ param, name })

    expect(output).toEqual({
      message: 'param1 does not contain a valid list/range of integers',
    })
  })

  it('should return false when ,, subsequent', () => {
    const param = '1,2,,3'
    const name = 'param1'

    const output = integersListRangeChecker({ param, name })

    expect(output).toEqual({
      message: 'param1 does not contain a valid list/range of integers',
    })
  })

  it('should return false when -- subsequent', () => {
    const param = '1,2,,3'
    const name = 'param1'

    const output = integersListRangeChecker({ param, name })

    expect(output).toEqual({
      message: 'param1 does not contain a valid list/range of integers',
    })
  })

  it('should return false when list is not in sequence', () => {
    const param = '1,3,2-4,3'
    const name = 'param1'

    const output = integersListRangeChecker({ param, name })

    expect(output).toEqual({
      message: 'param1 does not contain a valid list/range of integers',
    })
  })

  it('should return valid when list', () => {
    const param = '1,2,3,4'
    const name = 'param1'

    const output = integersListRangeChecker({ param, name })

    expect(output).toEqual({ message: 'ok' })
  })

  it('should return valid when range', () => {
    const param = '1-2'
    const name = 'param1'

    const output = integersListRangeChecker({ param, name })

    expect(output).toEqual({ message: 'ok' })
  })

  it('should return valid when list and range', () => {
    const param = '1-2,5-8'
    const name = 'param1'

    const output = integersListRangeChecker({ param, name })

    expect(output).toEqual({ message: 'ok' })
  })

  it('should return valid when integer', () => {
    const param = '12'
    const name = 'param1'

    const output = integersListRangeChecker({ param, name })

    expect(output).toEqual({ message: 'ok' })
  })

  it('should return valid when zero', () => {
    const param = '0'
    const name = 'param1'

    const output = integersListRangeChecker({ param, name })

    expect(output).toEqual({ message: 'ok' })
  })
})
