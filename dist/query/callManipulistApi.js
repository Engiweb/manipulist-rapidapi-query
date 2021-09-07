"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var validateKeys_1 = __importDefault(require("../validation/validateKeys"));
var callToolApi_1 = __importDefault(require("./callToolApi"));
var callFileApi_1 = __importDefault(require("./callFileApi"));
var callManipulistApi = function (_a) {
    var endpoint = _a.endpoint, apiKey = _a.apiKey, input = _a.input, file = _a.file, param1 = _a.param1, param2 = _a.param2, lb = _a.lb;
    var validityMessage = validateKeys_1.default({
        endpoint: endpoint,
        apiKey: apiKey,
        input: input,
        file: file,
        param1: param1,
        param2: param2,
        lb: lb,
    });
    if (validityMessage.message !== 'ok') {
        return Promise.resolve(validityMessage);
    }
    var isFile = endpoint.includes('/file/');
    if (isFile) {
        return callFileApi_1.default({
            endpoint: endpoint,
            apiKey: apiKey,
            file: file,
            param1: param1,
            param2: param2,
            lb: lb,
        });
    }
    return callToolApi_1.default({
        endpoint: endpoint,
        apiKey: apiKey,
        input: input,
        param1: param1,
        param2: param2,
        lb: lb,
    });
};
exports.default = callManipulistApi;
