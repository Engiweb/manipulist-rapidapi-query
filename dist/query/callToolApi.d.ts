import { ManipulistApi, ManipulistResponse } from '../../@types/types';
declare const callToolApi: ({ endpoint, apiKey, input, param1, param2, lb, }: ManipulistApi) => Promise<ManipulistResponse>;
export default callToolApi;
