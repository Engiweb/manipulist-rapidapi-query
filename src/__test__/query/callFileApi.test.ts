import callFileApi from '../../query/callFileApi'
import { TOOL_ADD_INCREMENTAL_NUMBER } from '../../constants/endpoints'
import callFileApiNode from '../../query/callFileApiNode'
import callFileApiBrowser from '../../query/callFileApiBrowser'

let isNode = false

jest.mock('../../query/callFileApiNode')
jest.mock('../../query/callFileApiBrowser')
jest.mock('../../utils/checkNodeOrBrowser', () => (): boolean => {
  isNode = !isNode
  return isNode
})

describe('callFileApi', () => {
  afterEach(() => jest.resetAllMocks())

  it('should callFileApiNode', async () => {
    const endpoint = TOOL_ADD_INCREMENTAL_NUMBER
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const file = 'file'
    const param1 = 3
    const param2 = 'atStart'
    const lb = 'lf'

    await callFileApi({
      endpoint,
      apiKey,
      file,
      param1,
      param2,
      lb,
    })

    expect(callFileApiNode).toHaveBeenCalledWith({
      endpoint,
      apiKey,
      file,
      param1,
      param2,
      lb,
    })
  })

  it('should callFileApiBrowser', async () => {
    const endpoint = TOOL_ADD_INCREMENTAL_NUMBER
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const file = 'file'
    const param1 = 3
    const param2 = 'atStart'
    const lb = 'lf'

    await callFileApi({
      endpoint,
      apiKey,
      file,
      param1,
      param2,
      lb,
    })

    expect(callFileApiBrowser).toHaveBeenCalledWith({
      endpoint,
      apiKey,
      file,
      param1,
      param2,
      lb,
    })
  })
})
