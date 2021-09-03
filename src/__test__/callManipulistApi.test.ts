import axios from 'axios'
import fs from 'fs'
import path from 'path'
import callManipulistApi from '../callManipulistApi'
import {
  FILE_TOOL_ADD_INCREMENTAL_NUMBER,
  TOOL_ADD_INCREMENTAL_NUMBER,
} from '../constants/endpoints'

jest.mock('axios')

describe('callManipulistApi', () => {
  afterEach(() => jest.resetAllMocks())

  it('should return error message when params not valid', async () => {
    const url = TOOL_ADD_INCREMENTAL_NUMBER
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = 'string'
    const file = undefined
    const param1 = 'wrong'
    const param2 = 'atStart'
    const lb = 'lf'

    const output = await callManipulistApi({
      url,
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
  })

  it('should return axios error if server down', async () => {
    const url = TOOL_ADD_INCREMENTAL_NUMBER
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = 'string'
    const file = undefined
    const param1 = 3
    const param2 = 'atStart'
    const lb = 'lf'

    axios.post = jest
      .fn()
      .mockImplementation(() => Promise.reject(new Error('server error')))

    const output = await callManipulistApi({
      url,
      apiKey,
      input,
      file,
      param1,
      param2,
      lb,
    })

    expect(output).toEqual({
      error: 'server error',
    })
  })

  it('should return response if string', async () => {
    const url = TOOL_ADD_INCREMENTAL_NUMBER
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = 'string'
    const file = undefined
    const param1 = 3
    const param2 = 'atStart'
    const lb = 'lf'

    axios.post = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: '3string' }))

    const output = await callManipulistApi({
      url,
      apiKey,
      input,
      file,
      param1,
      param2,
      lb,
    })

    expect(output).toEqual({
      data: '3string',
    })
  })

  it('should return response if file', async () => {
    const url = FILE_TOOL_ADD_INCREMENTAL_NUMBER
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = undefined
    const file = fs.readFileSync(
      path.join(__dirname, '../../fixtures/sample.txt')
    )
    const param1 = 3
    const param2 = 'atStart'
    const lb = 'lf'

    axios.post = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: '3string' }))

    const output = await callManipulistApi({
      url,
      apiKey,
      input,
      file,
      param1,
      param2,
      lb,
    })

    expect(output).toEqual({
      data: '3string',
    })
  })
})
