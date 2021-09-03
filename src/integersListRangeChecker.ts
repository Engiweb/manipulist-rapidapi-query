import { ManipulistMessage } from '../@types/types'

type RangeChecker = {
  param: string | number | undefined
  name: string
}

const sortAb = (a: number, b: number): number => a - b

const integersListRangeChecker = ({
  param,
  name,
}: RangeChecker): ManipulistMessage => {
  const message = `${name} does not contain a valid list/range of integers`
  const response = { message }

  if (!param || param === '') {
    return response
  }

  const paramIntegers = param
    .toString()
    .split(/[,|-]/)
    .map((num) => parseInt(num))

  if (paramIntegers.length < 1) {
    response.message = message
    return response
  }

  const reversed = paramIntegers.slice().reverse().join(',')
  const sorted = paramIntegers.sort(sortAb).reverse().join(',')

  if (sorted !== reversed) {
    response.message = message
    return response
  } else {
    for (let index = 0; index < paramIntegers.length; index++) {
      if (Number.isNaN(paramIntegers[index])) {
        response.message = message
        return response
      }
    }
  }

  return { message: 'ok' }
}

export default integersListRangeChecker
