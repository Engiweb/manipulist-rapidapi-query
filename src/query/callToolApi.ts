import axios, { AxiosError, AxiosResponse } from 'axios'
import { ManipulistApi, ManipulistResponse } from '../../@types/types'
import {
  MANIPULIST_RAPIDAPI_BASE_URL,
  MANIPULIST_RAPIDAPI_HOST,
} from '../constants/endpoints'

const callToolApi = ({
  endpoint,
  apiKey,
  input,
  param1,
  param2,
  lb,
}: ManipulistApi): Promise<ManipulistResponse> =>
  axios
    .post(
      `${MANIPULIST_RAPIDAPI_BASE_URL}${endpoint}`,
      {
        input,
        param1,
        param2,
        lb,
      },
      {
        headers: {
          'x-rapidapi-host': MANIPULIST_RAPIDAPI_HOST,
          'x-rapidapi-key': apiKey,
          useQueryString: true,
          'content-type': 'application/json',
        },
      }
    )
    .then((response: AxiosResponse): ManipulistResponse => {
      if (!response.data) {
        return { error: 'Could not retrieve data' }
      }

      return response.data
    })
    .catch(
      (error: Error | AxiosError): ManipulistResponse => ({
        error: error.message,
      })
    )

export default callToolApi
