import axios from 'axios'
import callToolApi from '../../query/callToolApi'
import { TOOL_ADD_INCREMENTAL_NUMBER } from '../../constants/endpoints'

jest.mock('axios')

describe('callToolApi', () => {
  afterEach(() => jest.resetAllMocks())

  it('should return axios error if server down', async () => {
    const endpoint = TOOL_ADD_INCREMENTAL_NUMBER
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = 'string'
    const param1 = 3
    const param2 = 'atStart'
    const lb = 'lf'

    axios.post = jest
      .fn()
      .mockImplementation(() => Promise.reject(new Error('server error')))

    const output = await callToolApi({
      endpoint,
      apiKey,
      input,
      param1,
      param2,
      lb,
    })

    expect(output).toEqual({
      error: 'server error',
    })
  })

  it('should return response if string', async () => {
    const endpoint = TOOL_ADD_INCREMENTAL_NUMBER
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = 'string'
    const param1 = 3
    const param2 = 'atStart'
    const lb = 'lf'

    axios.post = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: { data: '3string' } }))

    const output = await callToolApi({
      endpoint,
      apiKey,
      input,
      param1,
      param2,
      lb,
    })

    expect(output).toEqual({
      data: '3string',
    })
  })
})
