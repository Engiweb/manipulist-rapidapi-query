import { ManipulistMessage } from '../../@types/types'
import integersListRangeChecker from './integersListRangeChecker'

type CheckTypeParams = {
  name: string
  param: string | number | undefined
  toolParam?: {
    type: string
    enum?: string[]
  }
}

const validateParam = ({
  name,
  param,
  toolParam,
}: CheckTypeParams): ManipulistMessage => {
  const response = { message: 'ok' }

  if (!toolParam) return response

  const type = toolParam.type

  if (type === 'string') {
    if (typeof param !== 'string') {
      response.message = name + ' is not a string'
    } else if (toolParam.enum && !toolParam.enum.includes(param)) {
      response.message =
        name + ' is not valid; options are ' + toolParam.enum.join(' | ')
    }
  } else if (type === 'integer') {
    if (!Number.isInteger(param)) {
      response.message = `${name} is not a valid integer`
    }
  } else if (type === 'range') {
    return integersListRangeChecker({
      param,
      name,
    })
  }

  return response
}

export default validateParam
