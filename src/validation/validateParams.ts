import { ManipulistMessage } from '../../@types/types'
import { TOOLS } from '../constants/tools'
import validateParam from './validateParam'

type Params = {
  tool: string
  param1: string | number | undefined
  param2: string | number | undefined
}

const validateParams = ({
  tool,
  param1,
  param2,
}: Params): ManipulistMessage => {
  const response = { message: 'ok' }

  const toolParams = TOOLS[tool as keyof typeof TOOLS]

  if (!toolParams) return response

  if (toolParams.required) {
    if (toolParams.required.includes('param1') && !param1) {
      return { message: 'param1 is required' }
    }

    if (toolParams.required.includes('param2') && !param2) {
      return { message: 'param2 is required' }
    }
  }

  if (param1) {
    const param1Message = validateParam({
      name: 'param1',
      param: param1,
      toolParam: toolParams.param1,
    })

    if (param1Message.message !== 'ok') {
      return param1Message
    }
  }

  if (param2) {
    const param2Message = validateParam({
      name: 'param2',
      param: param2,
      toolParam: toolParams.param2,
    })

    if (param2Message.message !== 'ok') {
      return param2Message
    }
  }

  return response
}

export default validateParams
