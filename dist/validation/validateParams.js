"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = require("../constants/tools");
var validateParam_1 = __importDefault(require("./validateParam"));
var validateParams = function (_a) {
    var tool = _a.tool, param1 = _a.param1, param2 = _a.param2;
    var response = { message: 'ok' };
    var toolParams = tools_1.TOOLS[tool];
    if (!toolParams)
        return response;
    if (toolParams.required) {
        if (toolParams.required.includes('param1') && !param1) {
            return { message: 'param1 is required' };
        }
        if (toolParams.required.includes('param2') && !param2) {
            return { message: 'param2 is required' };
        }
    }
    if (param1) {
        var param1Message = validateParam_1.default({
            name: 'param1',
            param: param1,
            toolParam: toolParams.param1,
        });
        if (param1Message.message !== 'ok') {
            return param1Message;
        }
    }
    if (param2) {
        var param2Message = validateParam_1.default({
            name: 'param2',
            param: param2,
            toolParam: toolParams.param2,
        });
        if (param2Message.message !== 'ok') {
            return param2Message;
        }
    }
    return response;
};
exports.default = validateParams;
