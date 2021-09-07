import { ManipulistApi, ManipulistResponse } from '../../@types/types';
declare const callManipulistApi: ({ endpoint, apiKey, input, file, param1, param2, lb, }: ManipulistApi) => Promise<ManipulistResponse>;
export default callManipulistApi;
