import { ManipulistApi, ManipulistResponse } from '../../@types/types'
import validateKeys from '../validation/validateKeys'
import callToolApi from './callToolApi'
import callFileApi from './callFileApi'

const callManipulistApi = ({
  endpoint,
  apiKey,
  input,
  file,
  param1,
  param2,
  lb,
}: ManipulistApi): Promise<ManipulistResponse> => {
  const validityMessage = validateKeys({
    endpoint,
    apiKey,
    input,
    file,
    param1,
    param2,
    lb,
  })

  if (validityMessage.message !== 'ok') {
    return Promise.resolve(validityMessage)
  }

  const isFile = endpoint.includes('/file/')

  if (isFile) {
    return callFileApi({
      endpoint,
      apiKey,
      file,
      param1,
      param2,
      lb,
    })
  }

  return callToolApi({
    endpoint,
    apiKey,
    input,
    param1,
    param2,
    lb,
  })
}

export default callManipulistApi
