"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var form_data_1 = __importDefault(require("form-data"));
var submitFormData_1 = __importDefault(require("./submitFormData"));
var endpoints_1 = require("../constants/endpoints");
var callFileApiNode = function (_a) {
    var endpoint = _a.endpoint, apiKey = _a.apiKey, file = _a.file, param1 = _a.param1, param2 = _a.param2, lb = _a.lb;
    var formData = new form_data_1.default();
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
    var options = {
        host: endpoints_1.MANIPULIST_RAPIDAPI_HOST,
        path: endpoint,
        method: 'POST',
        protocol: 'https:',
        headers: {
            'x-rapidapi-host': endpoints_1.MANIPULIST_RAPIDAPI_HOST,
            'x-rapidapi-key': apiKey,
        },
    };
    return submitFormData_1.default({
        formData: formData,
        options: options,
    });
};
exports.default = callFileApiNode;
