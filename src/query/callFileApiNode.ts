import { ManipulistApi, ManipulistResponse } from '../../@types/types'
import FormData from 'form-data'
import submitFormData from './submitFormData'
import { MANIPULIST_RAPIDAPI_HOST } from '../constants/endpoints'

const callFileApiNode = ({
  endpoint,
  apiKey,
  file,
  param1,
  param2,
  lb,
}: ManipulistApi): Promise<ManipulistResponse> => {
  const formData = new FormData()

  formData.append('file', file)

  if (param1) {
    formData.append('param1', param1.toString())
  }

  if (param2) {
    formData.append('param2', param2.toString())
  }

  if (lb) {
    formData.append('lb', lb)
  }

  const options: FormData.SubmitOptions = {
    host: MANIPULIST_RAPIDAPI_HOST,
    path: endpoint,
    method: 'POST',
    protocol: 'https:',
    headers: {
      'x-rapidapi-host': MANIPULIST_RAPIDAPI_HOST,
      'x-rapidapi-key': apiKey,
    },
  }

  return submitFormData({
    formData,
    options,
  })
}

export default callFileApiNode
