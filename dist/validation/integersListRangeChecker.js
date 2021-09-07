"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sortAb = function (a, b) { return a - b; };
var integersListRangeChecker = function (_a) {
    var param = _a.param, name = _a.name;
    var message = name + " does not contain a valid list/range of integers";
    var response = { message: message };
    if (!param || param === '') {
        return response;
    }
    var paramIntegers = param
        .toString()
        .split(/[,|-]/)
        .map(function (num) { return parseInt(num); });
    if (paramIntegers.includes(NaN) || paramIntegers.length < 1) {
        response.message = message;
        return response;
    }
    var reversed = paramIntegers.slice().reverse().join(',');
    var sorted = paramIntegers.sort(sortAb).reverse().join(',');
    if (sorted !== reversed) {
        response.message = message;
        return response;
    }
    else {
        for (var index = 0; index < paramIntegers.length; index++) {
            if (Number.isNaN(paramIntegers[index])) {
                response.message = message;
                return response;
            }
        }
    }
    return { message: 'ok' };
};
exports.default = integersListRangeChecker;
