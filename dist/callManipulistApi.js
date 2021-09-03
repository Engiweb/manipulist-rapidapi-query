"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var validateKeys_1 = __importDefault(require("./validateKeys"));
var form_data_1 = __importDefault(require("form-data"));
var callManipulistApi = function (_a) {
    var url = _a.url, apiKey = _a.apiKey, input = _a.input, file = _a.file, param1 = _a.param1, param2 = _a.param2, lb = _a.lb;
    var validityMessage = validateKeys_1.default({
        url: url,
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
    var isFile = url.includes('/file/');
    var data;
    var specificHeaders = {};
    if (isFile) {
        var data_1 = new form_data_1.default();
        if (file) {
            data_1.append('file', file);
        }
        if (param1) {
            data_1.append('param1', param1);
        }
        if (param2) {
            data_1.append('param2', param2);
        }
        if (lb) {
            data_1.append('lb', lb);
        }
        specificHeaders = data_1.getHeaders();
    }
    else {
        data = {
            input: input,
            param1: param1,
            param2: param2,
            lb: lb,
        };
        specificHeaders = {
            'content-type': 'application/json',
        };
    }
    return axios_1.default
        .post("https://manipulist.p.rapidapi.com/" + url, data, {
        headers: __assign({ 
            // 'content-type': isFile ? 'multipart/form-data' : 'application/json',
            'x-rapidapi-host': 'manipulist.p.rapidapi.com', 'x-rapidapi-key': apiKey, useQueryString: true }, specificHeaders),
    })
        .then(function (response) { return response; })
        .catch(function (error) { return ({
        error: error.message,
    }); });
    // return axios
    //   .post({
    //     url: `https://manipulist.p.rapidapi.com/${url}`,
    //     headers: {
    //       'content-type': isFile ? 'multipart/form-data' : 'application/json',
    //       'x-rapidapi-host': 'manipulist.p.rapidapi.com',
    //       'x-rapidapi-key': apiKey,
    //       useQueryString: true,
    //     },
    //     data,
    //   })
    //   .then((response: ManipulistResponse): ManipulistResponse => response)
    //   .catch(
    //     (error: Error | AxiosError): ManipulistError => ({
    //       error,
    //     })
    //   )
};
exports.default = callManipulistApi;
