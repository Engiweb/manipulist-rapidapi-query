"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var endpoints_1 = require("../constants/endpoints");
var axios_1 = __importDefault(require("axios"));
var callFileApiBrowser = function (_a) {
    var endpoint = _a.endpoint, apiKey = _a.apiKey, file = _a.file, param1 = _a.param1, param2 = _a.param2, lb = _a.lb;
    var formData = new FormData();
    formData.append('file', file);
    if (param1) {
        formData.append('param1', param1.toString());
    }
    if (param2) {
        formData.append('param2', param2.toString());
    }
    if (lb) {
        formData.append('lb', lb);
    }
    var headers = {
        'x-rapidapi-host': endpoints_1.MANIPULIST_RAPIDAPI_HOST,
        'x-rapidapi-key': apiKey,
        'content-type': 'multipart/form-data',
    };
    var url = endpoints_1.MANIPULIST_RAPIDAPI_BASE_URL + endpoint;
    return axios_1.default
        .post(url, formData, { headers: headers })
        .then(function (response) { return response.data; })
        .catch(function () { return ({
        error: 'Could not get response',
    }); });
};
exports.default = callFileApiBrowser;
