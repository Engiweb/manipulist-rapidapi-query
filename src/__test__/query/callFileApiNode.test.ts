import callFileApiNode from '../../query/callFileApiNode'
import { TOOL_ADD_INCREMENTAL_NUMBER } from '../../constants/endpoints'
import submitFormData from '../../query/submitFormData'

jest.mock('../../query/submitFormData')

describe('callFileApiNode', () => {
  afterEach(() => jest.resetAllMocks())

  it('should return axios error if server down', async () => {
    const endpoint = TOOL_ADD_INCREMENTAL_NUMBER
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const file = 'file'
    const param1 = 3
    const param2 = 'atStart'
    const lb = 'lf'

    await callFileApiNode({
      endpoint,
      apiKey,
      file,
      param1,
      param2,
      lb,
    })

    expect(submitFormData).toHaveBeenCalledTimes(1)
  })
})
