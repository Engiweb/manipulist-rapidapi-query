import { ManipulistMessage } from '../../@types/types';
declare type RangeChecker = {
    param: string | number | undefined;
    name: string;
};
declare const integersListRangeChecker: ({ param, name, }: RangeChecker) => ManipulistMessage;
export default integersListRangeChecker;
