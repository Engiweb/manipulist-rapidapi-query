import { ManipulistApi, ManipulistResponse } from '../../@types/types'
import callFileApiNode from './callFileApiNode'
import checkNodeOrBrowser from '../utils/checkNodeOrBrowser'
import callFileApiBrowser from './callFileApiBrowser'

const callFileApi = ({
  endpoint,
  apiKey,
  file,
  param1,
  param2,
  lb,
}: ManipulistApi): Promise<ManipulistResponse> => {
  const isNode = checkNodeOrBrowser(process)

  if (isNode) {
    return callFileApiNode({
      endpoint,
      apiKey,
      file,
      param1,
      param2,
      lb,
    })
  }

  return callFileApiBrowser({
    endpoint,
    apiKey,
    file,
    param1,
    param2,
    lb,
  })
}

export default callFileApi
