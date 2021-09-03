"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var integersListRangeChecker_1 = __importDefault(require("./integersListRangeChecker"));
var validateParam = function (_a) {
    var name = _a.name, param = _a.param, toolParam = _a.toolParam;
    var response = { message: 'ok' };
    if (!toolParam)
        return response;
    var type = toolParam.type;
    if (type === 'string') {
        if (typeof param !== 'string') {
            response.message = name + ' is not a string';
        }
        else if (toolParam.enum && !toolParam.enum.includes(param)) {
            response.message =
                name + ' is not valid; options are ' + toolParam.enum.join(' | ');
        }
    }
    else if (type === 'integer') {
        if (!Number.isInteger(param)) {
            response.message = name + " is not a valid integer";
        }
    }
    else if (type === 'range') {
        return integersListRangeChecker_1.default({
            param: param,
            name: name,
        });
    }
    return response;
};
exports.default = validateParam;
