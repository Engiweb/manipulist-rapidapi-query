"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var endpoints_1 = require("../constants/endpoints");
var callToolApi = function (_a) {
    var endpoint = _a.endpoint, apiKey = _a.apiKey, input = _a.input, param1 = _a.param1, param2 = _a.param2, lb = _a.lb;
    return axios_1.default
        .post("" + endpoints_1.MANIPULIST_RAPIDAPI_BASE_URL + endpoint, {
        input: input,
        param1: param1,
        param2: param2,
        lb: lb,
    }, {
        headers: {
            'x-rapidapi-host': endpoints_1.MANIPULIST_RAPIDAPI_HOST,
            'x-rapidapi-key': apiKey,
            useQueryString: true,
            'content-type': 'application/json',
        },
    })
        .then(function (response) {
        if (!response.data) {
            return { error: 'Could not retrieve data' };
        }
        return response.data;
    })
        .catch(function (error) { return ({
        error: error.message,
    }); });
};
exports.default = callToolApi;
