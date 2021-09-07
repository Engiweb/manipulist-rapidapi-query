/* eslint no-console:0 */
import {
  FILE_TOOL_ADD_INCREMENTAL_NUMBER,
  TOOL_ADD_INCREMENTAL_NUMBER,
} from '../../constants/endpoints'
import validateKeys from '../../validation/validateKeys'

describe('validateKeys', () => {
  it('should return API key missing', () => {
    const endpoint = TOOL_ADD_INCREMENTAL_NUMBER
    const apiKey = undefined
    const input = undefined
    const file = undefined
    const param1 = undefined
    const param2 = undefined
    const lb = undefined

    const output = validateKeys({
      endpoint,
      apiKey,
      input,
      file,
      param1,
      param2,
      lb,
    })

    expect(output).toEqual({
      message: 'API key missing or too short',
    })
  })

  it('should return API key missing', () => {
    const endpoint = 'not-valid-endpoint'
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = undefined
    const file = undefined
    const param1 = undefined
    const param2 = undefined
    const lb = undefined

    const output = validateKeys({
      endpoint,
      apiKey,
      input,
      file,
      param1,
      param2,
      lb,
    })

    expect(output).toEqual({
      message:
        'Endpoint not valid - valid endpoints are: /file/text | /file/tool/add-incremental-number | /file/tool/add-new-line | /file/tool/add-prefix | /file/tool/add-suffix | /file/tool/add-text-at-lines | /file/tool/add-text-every-nth-line | /file/tool/convert-case | /file/tool/decode | /file/tool/encode | /file/tool/extract-columns | /file/tool/extract-every-nth-line | /file/tool/extract-line-chunk-before-after-nth-character | /file/tool/extract-line-chunk-before-after-nth-word | /file/tool/extract-line-chunk-before-after-text | /file/tool/extract-line-chunk-between-text | /file/tool/extract-lines-containing-text | /file/tool/extract-non-alphanumeric-characters | /file/tool/extract-random-lines | /file/tool/extract-rows | /file/tool/find-and-replace | /file/tool/remove-blank-lines | /file/tool/remove-columns | /file/tool/remove-duplicate-lines | /file/tool/remove-every-nth-line | /file/tool/remove-line-chunk-between-text | /file/tool/remove-lines-containing-text | /file/tool/remove-new-lines | /file/tool/remove-non-alphanumeric-characters | /file/tool/remove-rows | /file/tool/sort-lines | /file/tool/trim-lines | /file/tool/web-extraction | /tool/add-incremental-number | /tool/add-new-line | /tool/add-prefix | /tool/add-suffix | /tool/add-text-at-lines | /tool/add-text-every-nth-line | /tool/convert-case | /tool/decode | /tool/encode | /tool/extract-columns | /tool/extract-every-nth-line | /tool/extract-line-chunk-before-after-nth-character | /tool/extract-line-chunk-before-after-nth-word | /tool/extract-line-chunk-before-after-text | /tool/extract-line-chunk-between-text | /tool/extract-lines-containing-text | /tool/extract-non-alphanumeric-characters | /tool/extract-random-lines | /tool/extract-rows | /tool/find-and-replace | /tool/remove-blank-lines | /tool/remove-columns | /tool/remove-duplicate-lines | /tool/remove-every-nth-line | /tool/remove-line-chunk-between-text | /tool/remove-lines-containing-text | /tool/remove-new-lines | /tool/remove-non-alphanumeric-characters | /tool/remove-rows | /tool/sort-lines | /tool/trim-lines | /tool/web-extraction',
    })
  })

  it('should return wrong file', () => {
    const endpoint = FILE_TOOL_ADD_INCREMENTAL_NUMBER
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = undefined
    const file = undefined
    const param1 = undefined
    const param2 = undefined
    const lb = 'lf'

    const output = validateKeys({
      endpoint,
      apiKey,
      input,
      file,
      param1,
      param2,
      lb,
    })

    expect(output).toEqual({
      message: 'Missing or corrupted file',
    })
  })

  it('should return wrong input', () => {
    const endpoint = TOOL_ADD_INCREMENTAL_NUMBER
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = undefined
    const file = undefined
    const param1 = undefined
    const param2 = undefined
    const lb = 'lf'

    const output = validateKeys({
      endpoint,
      apiKey,
      input,
      file,
      param1,
      param2,
      lb,
    })

    expect(output).toEqual({
      message: 'input is not a valid string',
    })
  })

  it('should return required param1', () => {
    const endpoint = TOOL_ADD_INCREMENTAL_NUMBER
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = 'string'
    const file = undefined
    const param1 = undefined
    const param2 = undefined
    const lb = 'lf'

    const output = validateKeys({
      endpoint,
      apiKey,
      input,
      file,
      param1,
      param2,
      lb,
    })

    expect(output).toEqual({
      message: 'param1 is required',
    })
  })

  it('should return wrong param1', () => {
    const endpoint = TOOL_ADD_INCREMENTAL_NUMBER
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = 'string'
    const file = undefined
    const param1 = 'test'
    const param2 = undefined
    const lb = 'lf'

    const output = validateKeys({
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
  })

  it('should return wrong param2', () => {
    const endpoint = TOOL_ADD_INCREMENTAL_NUMBER
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = 'string'
    const file = undefined
    const param1 = 3
    const param2 = 'wrong'
    const lb = 'lf'

    const output = validateKeys({
      endpoint,
      apiKey,
      input,
      file,
      param1,
      param2,
      lb,
    })

    expect(output).toEqual({
      message: 'param2 is not valid; options are atStart | atEnd',
    })
  })

  it('should return wrong param2', () => {
    const endpoint = TOOL_ADD_INCREMENTAL_NUMBER
    const apiKey = 'longstringapikeylongstringapikeylongstringapikey'
    const input = 'string'
    const file = undefined
    const param1 = 3
    const param2 = 'atStart'
    const lb = 'lf'

    const output = validateKeys({
      endpoint,
      apiKey,
      input,
      file,
      param1,
      param2,
      lb,
    })

    expect(output).toEqual({
      message: 'ok',
    })
  })
})
