"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var submitFormData = function (_a) {
    var formData = _a.formData, options = _a.options;
    return new Promise(function (resolve) {
        formData.submit(options, function (err, res) {
            if (err) {
                return resolve({ error: err.message });
            }
            var body = [];
            res.on('data', function (chunk) { return body.push(chunk); });
            res.on('end', function () {
                try {
                    var response = JSON.parse(Buffer.concat(body).toString());
                    resolve(response);
                }
                catch (_a) {
                    resolve({ error: 'Could not get response' });
                }
            });
        });
    });
};
exports.default = submitFormData;
