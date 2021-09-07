import fs from 'fs'
import path from 'path'
import callManipulistApi from '../../query/callManipulistApi'
import {
  FILE_TOOL_ADD_INCREMENTAL_NUMBER,
  TOOL_ADD_INCREMENTAL_NUMBER,
} from '../../constants/endpoints'
import callToolApi from '../../query/callToolApi'
import callFileApi from '../../query/callFileApi'

jest.mock('../../query/callToolApi')
jest.mock('../../query/callFileApi')

describe('callManipulistApi', () => {
  afterEach(() => jest.resetAllMocks())

  it('should return error message when params not valid', async () => {
    const endpoint = TOOL_ADD_INCREMENTAL_NUMBER
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = 'string'
    const file = undefined
    const param1 = 'wrong'
    const param2 = 'atStart'
    const lb = 'lf'

    const output = await callManipulistApi({
      endpoint,
      apiKey,
      input,
      file,
      param1,
      param2,
      lb,
    })

    expect(output).toEqual({
      message: 'param1 is not a valid integer',
    })

    expect(callToolApi).toBeCalledTimes(0)
  })

  it('should return response if string', async () => {
    const endpoint = TOOL_ADD_INCREMENTAL_NUMBER
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = 'string'
    const file = undefined
    const param1 = 3
    const param2 = 'atStart'
    const lb = 'lf'

    await callManipulistApi({
      endpoint,
      apiKey,
      input,
      file,
      param1,
      param2,
      lb,
    })

    expect(callToolApi).toHaveBeenCalledWith({
      endpoint,
      apiKey,
      input,
      param1,
      param2,
      lb,
    })
  })

  it('should return response if file', async () => {
    const endpoint = FILE_TOOL_ADD_INCREMENTAL_NUMBER
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = undefined
    const file = fs.readFileSync(
      path.join(__dirname, '../../../fixtures/sample.txt')
    )
    const param1 = 3
    const param2 = 'atStart'
    const lb = 'lf'

    await callManipulistApi({
      endpoint,
      apiKey,
      input,
      file,
      param1,
      param2,
      lb,
    })

    expect(callFileApi).toHaveBeenCalledWith({
      endpoint,
      apiKey,
      file,
      param1,
      param2,
      lb,
    })
  })
})
