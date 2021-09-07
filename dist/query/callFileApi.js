"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var callFileApiNode_1 = __importDefault(require("./callFileApiNode"));
var checkNodeOrBrowser_1 = __importDefault(require("../utils/checkNodeOrBrowser"));
var callFileApiBrowser_1 = __importDefault(require("./callFileApiBrowser"));
var callFileApi = function (_a) {
    var endpoint = _a.endpoint, apiKey = _a.apiKey, file = _a.file, param1 = _a.param1, param2 = _a.param2, lb = _a.lb;
    var isNode = checkNodeOrBrowser_1.default();
    if (isNode) {
        return callFileApiNode_1.default({
            endpoint: endpoint,
            apiKey: apiKey,
            file: file,
            param1: param1,
            param2: param2,
            lb: lb,
        });
    }
    return callFileApiBrowser_1.default({
        endpoint: endpoint,
        apiKey: apiKey,
        file: file,
        param1: param1,
        param2: param2,
        lb: lb,
    });
};
exports.default = callFileApi;
