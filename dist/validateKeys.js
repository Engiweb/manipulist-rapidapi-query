"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var endpoints_1 = require("./constants/endpoints");
var tools_1 = require("./constants/tools");
var validateParams_1 = __importDefault(require("./validateParams"));
var validateKeys = function (_a) {
    var url = _a.url, apiKey = _a.apiKey, input = _a.input, file = _a.file, param1 = _a.param1, param2 = _a.param2, lb = _a.lb;
    if (!apiKey || apiKey.length < 20) {
        return {
            message: 'API key missing or too short',
        };
    }
    if (!endpoints_1.ENDPOINTS.includes(url)) {
        return {
            message: "Endpoint not valid - valid endpoints are: " + endpoints_1.ENDPOINTS.join(' | '),
        };
    }
    if (lb && !tools_1.LB_OPTIONS.includes(lb)) {
        return {
            message: 'lb is not valid, options are lf | clrf',
        };
    }
    var isFile = url.includes('/file/');
    if (isFile) {
        if (!file) {
            return {
                message: 'Missing or corrupted file',
            };
        }
    }
    else {
        if (!input || typeof input !== 'string') {
            return {
                message: 'input is not a valid string',
            };
        }
    }
    var tool = url.replace('/file', '').replace('/tool/', '');
    var paramValidity = validateParams_1.default({
        tool: tool,
        param1: param1,
        param2: param2,
    });
    return paramValidity;
};
exports.default = validateKeys;
