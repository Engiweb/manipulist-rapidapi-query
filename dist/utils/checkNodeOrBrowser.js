"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkNodeOrBrowser = function () {
    var isNode = false;
    if (typeof process === 'object') {
        if (typeof process.versions === 'object') {
            if (typeof process.versions.node !== 'undefined') {
                isNode = true;
            }
        }
    }
    return isNode;
};
exports.default = checkNodeOrBrowser;
