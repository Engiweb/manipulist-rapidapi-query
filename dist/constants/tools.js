"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOOLS = exports.LB_OPTIONS = void 0;
exports.LB_OPTIONS = ['lf', 'crlf'];
exports.TOOLS = {
    'add-incremental-number': {
        required: ['param1'],
        param1: {
            type: 'integer',
        },
        param2: {
            type: 'string',
            enum: ['atStart', 'atEnd'],
        },
    },
    'add-new-line': {
        required: ['param1'],
        param1: {
            type: 'string',
        },
        param2: {
            type: 'string',
            enum: ['before', 'after'],
        },
    },
    'add-prefix': {
        required: ['param1'],
        param1: {
            type: 'string',
        },
    },
    'add-suffix': {
        required: ['param1'],
        param1: {
            type: 'string',
        },
    },
    'add-text-at-lines': {
        required: ['param1', 'param2'],
        param1: {
            type: 'string',
        },
        param2: {
            type: 'range',
        },
    },
    'add-text-every-nth-line': {
        required: ['param1', 'param2'],
        param1: {
            type: 'string',
        },
        param2: {
            type: 'integer',
        },
    },
    'convert-case': {
        param1: {
            type: 'string',
            enum: ['lowerCase', 'upperCase', 'titleCase', 'camelCase'],
        },
    },
    decode: {
        param1: {
            type: 'string',
            enum: ['base64', 'uri'],
        },
    },
    encode: {
        param1: {
            type: 'string',
            enum: ['base64', 'uri'],
        },
    },
    'extract-columns': {
        required: ['param1', 'param2'],
        param1: {
            type: 'range',
        },
        param2: {
            type: 'string',
        },
    },
    'extract-every-nth-line': {
        required: ['param1'],
        param1: {
            type: 'integer',
        },
    },
    'extract-line-chunk-before-after-nth-character': {
        required: ['param1'],
        param1: {
            type: 'integer',
        },
        param2: {
            type: 'string',
            enum: ['before', 'after'],
        },
    },
    'extract-line-chunk-before-after-nth-word': {
        required: ['param1'],
        param1: {
            type: 'integer',
        },
        param2: {
            type: 'string',
            enum: ['before', 'after'],
        },
    },
    'extract-line-chunk-before-after-text': {
        required: ['param1'],
        param1: {
            type: 'string',
        },
        param2: {
            type: 'string',
            enum: ['before', 'after'],
        },
    },
    'extract-line-chunk-between-text': {
        required: ['param1', 'param2'],
        param1: {
            type: 'string',
        },
        param2: {
            type: 'string',
        },
    },
    'extract-lines-containing-text': {
        required: ['param1'],
        param1: {
            type: 'string',
        },
    },
    'extract-random-lines': {
        required: ['param1'],
        param1: {
            type: 'integer',
        },
    },
    'extract-rows': {
        param1: {
            type: 'range',
        },
    },
    'find-and-replace': {
        required: ['param1'],
        param1: {
            type: 'string',
        },
        param2: {
            type: 'string',
        },
    },
    'remove-columns': {
        param1: {
            type: 'range',
        },
        param2: {
            type: 'string',
        },
    },
    'remove-every-nth-line': {
        required: ['param1'],
        param1: {
            type: 'integer',
        },
    },
    'remove-line-chunk-between-text': {
        required: ['param1', 'param2'],
        param1: {
            type: 'string',
        },
        param2: {
            type: 'string',
        },
    },
    'remove-lines-containing-text': {
        required: ['param1'],
        param1: {
            type: 'string',
        },
    },
    'remove-new-lines': {
        param1: {
            type: 'string',
        },
    },
    'remove-rows': {
        required: ['param1'],
        param1: {
            type: 'string',
        },
    },
    'sort-lines': {
        param1: {
            type: 'string',
            enum: ['az', 'za', 'reverse', 'shuffle'],
        },
    },
    'web-extraction': {
        param1: {
            type: 'string',
            enum: ['domains', 'emails', 'handles', 'hashtags', 'websites'],
        },
    },
};
