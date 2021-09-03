import axios, { AxiosError } from 'axios'
import {
  ManipulistApi,
  ManipulistError,
  ManipulistResponse,
} from '../@types/types'
import validateKeys from './validateKeys'
import FormData from 'form-data'

const callManipulistApi = ({
  url,
  apiKey,
  input,
  file,
  param1,
  param2,
  lb,
}: ManipulistApi): Promise<ManipulistResponse | ManipulistError> => {
  const validityMessage = validateKeys({
    url,
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

  const isFile = url.includes('/file/')

  let data

  let specificHeaders = {}

  if (isFile) {
    const data = new FormData()

    if (file) {
      data.append('file', file)
    }

    if (param1) {
      data.append('param1', param1)
    }

    if (param2) {
      data.append('param2', param2)
    }

    if (lb) {
      data.append('lb', lb)
    }

    specificHeaders = data.getHeaders()
  } else {
    data = {
      input,
      param1,
      param2,
      lb,
    }

    specificHeaders = {
      'content-type': 'application/json',
    }
  }

  return axios
    .post(`https://manipulist.p.rapidapi.com/${url}`, data, {
      headers: {
        // 'content-type': isFile ? 'multipart/form-data' : 'application/json',
        'x-rapidapi-host': 'manipulist.p.rapidapi.com',
        'x-rapidapi-key': apiKey,
        useQueryString: true,
        ...specificHeaders,
      },
    })
    .then((response: ManipulistResponse): ManipulistResponse => response)
    .catch(
      (error: Error | AxiosError): ManipulistError => ({
        error: error.message,
      })
    )

  // return axios
  //   .post({
  //     url: `https://manipulist.p.rapidapi.com/${url}`,
  //     headers: {
  //       'content-type': isFile ? 'multipart/form-data' : 'application/json',
  //       'x-rapidapi-host': 'manipulist.p.rapidapi.com',
  //       'x-rapidapi-key': apiKey,
  //       useQueryString: true,
  //     },
  //     data,
  //   })
  //   .then((response: ManipulistResponse): ManipulistResponse => response)
  //   .catch(
  //     (error: Error | AxiosError): ManipulistError => ({
  //       error,
  //     })
  //   )
}

export default callManipulistApi
