import { ManipulistApi, ManipulistError, ManipulistResponse } from '../@types/types';
declare const callManipulistApi: ({ url, apiKey, input, file, param1, param2, lb, }: ManipulistApi) => Promise<ManipulistResponse | ManipulistError>;
export default callManipulistApi;
