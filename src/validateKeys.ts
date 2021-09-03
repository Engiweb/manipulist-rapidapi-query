import { ManipulistApi, ManipulistResponse } from '../@types/types'
import { ENDPOINTS } from './constants/endpoints'
import { LB_OPTIONS } from './constants/tools'
import validateParams from './validateParams'

const validateKeys = ({
  url,
  apiKey,
  input,
  file,
  param1,
  param2,
  lb,
}: ManipulistApi): ManipulistResponse => {
  if (!apiKey || apiKey.length < 20) {
    return {
      message: 'API key missing or too short',
    }
  }

  if (!ENDPOINTS.includes(url)) {
    return {
      message: `Endpoint not valid - valid endpoints are: ${ENDPOINTS.join(
        ' | '
      )}`,
    }
  }

  if (lb && !LB_OPTIONS.includes(lb)) {
    return {
      message: 'lb is not valid, options are lf | clrf',
    }
  }

  const isFile = url.includes('/file/')

  if (isFile) {
    if (!file) {
      return {
        message: 'Missing or corrupted file',
      }
    }
  } else {
    if (!input || typeof input !== 'string') {
      return {
        message: 'input is not a valid string',
      }
    }
  }

  const tool = url.replace('/file', '').replace('/tool/', '')
  const paramValidity = validateParams({
    tool,
    param1,
    param2,
  })

  return paramValidity
}

export default validateKeys
