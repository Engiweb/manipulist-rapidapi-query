import { ManipulistApi, ManipulistResponse } from '../../@types/types';
declare const callFileApi: ({ endpoint, apiKey, file, param1, param2, lb, }: ManipulistApi) => Promise<ManipulistResponse>;
export default callFileApi;
