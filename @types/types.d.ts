import { AxiosError } from 'axios'

export type ManipulistApi = {
  url: string
  apiKey: string | undefined
  input?: string | undefined
  file?: unknown | undefined
  param1?: string | number | undefined
  param2?: string | number | undefined
  lb?: 'lf' | 'crlf'
}

export type ManipulistMessage = {
  message: string
}

export type ManipulistError = {
  error: string | AxiosError
}

export type ManipulistResponse = {
  message?: string
  data?: string
}

export type Tool = {
  required?: string[]
  param1?: {
    type: string
    enum?: string[]
  }
  param2?: {
    type: string
    enum?: string[]
  }
}

export type Tools = {
  [tool: string]: Tool
}
