import { ManipulistMessage } from '../../@types/types';
declare type Params = {
    tool: string;
    param1: string | number | undefined;
    param2: string | number | undefined;
};
declare const validateParams: ({ tool, param1, param2, }: Params) => ManipulistMessage;
export default validateParams;
