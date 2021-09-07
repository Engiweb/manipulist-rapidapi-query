import { ManipulistApi, ManipulistResponse } from '../../@types/types'
import {
  MANIPULIST_RAPIDAPI_BASE_URL,
  MANIPULIST_RAPIDAPI_HOST,
} from '../constants/endpoints'
import axios from 'axios'

const callFileApiBrowser = ({
  endpoint,
  apiKey,
  file,
  param1,
  param2,
  lb,
}: ManipulistApi): Promise<ManipulistResponse> => {
  const formData = new FormData()

  formData.append('file', file as Blob)

  if (param1) {
    formData.append('param1', param1.toString())
  }

  if (param2) {
    formData.append('param2', param2.toString())
  }

  if (lb) {
    formData.append('lb', lb)
  }

  const headers = {
    'x-rapidapi-host': MANIPULIST_RAPIDAPI_HOST as string,
    'x-rapidapi-key': apiKey as string,
    'content-type': 'multipart/form-data',
  }

  const url = MANIPULIST_RAPIDAPI_BASE_URL + endpoint

  return axios
    .post(url, formData, { headers })
    .then((response): ManipulistResponse => response.data as ManipulistResponse)
    .catch(() => ({
      error: 'Could not get response',
    }))
}

export default callFileApiBrowser
