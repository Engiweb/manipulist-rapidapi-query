/* eslint no-console:0 */
import checkNodeOrBrowser from '../../utils/checkNodeOrBrowser'

describe('checkNodeOrBrowser', () => {
  it('should return false when no process', () => {
    const process = undefined

    expect(checkNodeOrBrowser(process)).toEqual(false)
  })

  it('should return false when no process versions', () => {
    const process = {
      versions: undefined,
    }

    expect(checkNodeOrBrowser(process)).toEqual(false)
  })

  it('should return false when no process versions node', () => {
    const process = {
      versions: { node: undefined },
    }

    expect(checkNodeOrBrowser(process)).toEqual(false)
  })

  it('should return true when node version', () => {
    const process = {
      versions: { node: '12.x' },
    }

    expect(checkNodeOrBrowser(process)).toEqual(true)
  })
})
