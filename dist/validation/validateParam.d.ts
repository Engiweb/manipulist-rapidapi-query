import { ManipulistMessage } from '../../@types/types';
declare type CheckTypeParams = {
    name: string;
    param: string | number | undefined;
    toolParam?: {
        type: string;
        enum?: string[];
    };
};
declare const validateParam: ({ name, param, toolParam, }: CheckTypeParams) => ManipulistMessage;
export default validateParam;
