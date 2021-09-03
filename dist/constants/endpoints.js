"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENDPOINTS = exports.TOOL_WEB_EXTRACTION = exports.TOOL_TRIM_LINES = exports.TOOL_SORT_LINES = exports.TOOL_REMOVE_ROWS = exports.TOOL_REMOVE_NON_ALPHANUMERIC_CHARACTERS = exports.TOOL_REMOVE_NEW_LINES = exports.TOOL_REMOVE_LINES_CONTAINING_TEXT = exports.TOOL_REMOVE_LINE_CHUNK_BETWEEN_TEXT = exports.TOOL_REMOVE_EVERY_NTH_LINE = exports.TOOL_REMOVE_DUPLICATE_LINES = exports.TOOL_REMOVE_COLUMNS = exports.TOOL_REMOVE_BLANK_LINES = exports.TOOL_FIND_AND_REPLACE = exports.TOOL_EXTRACT_ROWS = exports.TOOL_EXTRACT_RANDOM_LINES = exports.TOOL_EXTRACT_NON_ALPHANUMERIC_CHARACTERS = exports.TOOL_EXTRACT_LINES_CONTAINING_TEXT = exports.TOOL_EXTRACT_LINE_CHUNK_BETWEEN_TEXT = exports.TOOL_EXTRACT_LINE_CHUNK_BEFORE_AFTER_TEXT = exports.TOOL_EXTRACT_LINE_CHUNK_BEFORE_AFTER_NTH_WORD = exports.TOOL_EXTRACT_LINE_CHUNK_BEFORE_AFTER_NTH_CHARACTER = exports.TOOL_EXTRACT_EVERY_NTH_LINE = exports.TOOL_EXTRACT_COLUMNS = exports.TOOL_ENCODE = exports.TOOL_DECODE = exports.TOOL_CONVERT_CASE = exports.TOOL_ADD_TEXT_EVERY_NTH_LINE = exports.TOOL_ADD_TEXT_AT_LINES = exports.TOOL_ADD_SUFFIX = exports.TOOL_ADD_PREFIX = exports.TOOL_ADD_NEW_LINE = exports.TOOL_ADD_INCREMENTAL_NUMBER = exports.FILE_TOOL_WEB_EXTRACTION = exports.FILE_TOOL_TRIM_LINES = exports.FILE_TOOL_SORT_LINES = exports.FILE_TOOL_REMOVE_ROWS = exports.FILE_TOOL_REMOVE_NON_ALPHANUMERIC_CHARACTERS = exports.FILE_TOOL_REMOVE_NEW_LINES = exports.FILE_TOOL_REMOVE_LINES_CONTAINING_TEXT = exports.FILE_TOOL_REMOVE_LINE_CHUNK_BETWEEN_TEXT = exports.FILE_TOOL_REMOVE_EVERY_NTH_LINE = exports.FILE_TOOL_REMOVE_DUPLICATE_LINES = exports.FILE_TOOL_REMOVE_COLUMNS = exports.FILE_TOOL_REMOVE_BLANK_LINES = exports.FILE_TOOL_FIND_AND_REPLACE = exports.FILE_TOOL_EXTRACT_ROWS = exports.FILE_TOOL_EXTRACT_RANDOM_LINES = exports.FILE_TOOL_EXTRACT_NON_ALPHANUMERIC_CHARACTERS = exports.FILE_TOOL_EXTRACT_LINES_CONTAINING_TEXT = exports.FILE_TOOL_EXTRACT_LINE_CHUNK_BETWEEN_TEXT = exports.FILE_TOOL_EXTRACT_LINE_CHUNK_BEFORE_AFTER_TEXT = exports.FILE_TOOL_EXTRACT_LINE_CHUNK_BEFORE_AFTER_NTH_WORD = exports.FILE_TOOL_EXTRACT_LINE_CHUNK_BEFORE_AFTER_NTH_CHARACTER = exports.FILE_TOOL_EXTRACT_EVERY_NTH_LINE = exports.FILE_TOOL_EXTRACT_COLUMNS = exports.FILE_TOOL_ENCODE = exports.FILE_TOOL_DECODE = exports.FILE_TOOL_CONVERT_CASE = exports.FILE_TOOL_ADD_TEXT_EVERY_NTH_LINE = exports.FILE_TOOL_ADD_TEXT_AT_LINES = exports.FILE_TOOL_ADD_SUFFIX = exports.FILE_TOOL_ADD_PREFIX = exports.FILE_TOOL_ADD_NEW_LINE = exports.FILE_TOOL_ADD_INCREMENTAL_NUMBER = exports.FILE_TEXT = void 0;
// general
var FILE = '/file';
var TOOL = '/tool';
exports.FILE_TEXT = FILE + "/text";
exports.FILE_TOOL_ADD_INCREMENTAL_NUMBER = "" + FILE + TOOL + "/add-incremental-number";
exports.FILE_TOOL_ADD_NEW_LINE = "" + FILE + TOOL + "/add-new-line";
exports.FILE_TOOL_ADD_PREFIX = "" + FILE + TOOL + "/add-prefix";
exports.FILE_TOOL_ADD_SUFFIX = "" + FILE + TOOL + "/add-suffix";
exports.FILE_TOOL_ADD_TEXT_AT_LINES = "" + FILE + TOOL + "/add-text-at-lines";
exports.FILE_TOOL_ADD_TEXT_EVERY_NTH_LINE = "" + FILE + TOOL + "/add-text-every-nth-line";
exports.FILE_TOOL_CONVERT_CASE = "" + FILE + TOOL + "/convert-case";
exports.FILE_TOOL_DECODE = "" + FILE + TOOL + "/decode";
exports.FILE_TOOL_ENCODE = "" + FILE + TOOL + "/encode";
exports.FILE_TOOL_EXTRACT_COLUMNS = "" + FILE + TOOL + "/extract-columns";
exports.FILE_TOOL_EXTRACT_EVERY_NTH_LINE = "" + FILE + TOOL + "/extract-every-nth-line";
exports.FILE_TOOL_EXTRACT_LINE_CHUNK_BEFORE_AFTER_NTH_CHARACTER = "" + FILE + TOOL + "/extract-line-chunk-before-after-nth-character";
exports.FILE_TOOL_EXTRACT_LINE_CHUNK_BEFORE_AFTER_NTH_WORD = "" + FILE + TOOL + "/extract-line-chunk-before-after-nth-word";
exports.FILE_TOOL_EXTRACT_LINE_CHUNK_BEFORE_AFTER_TEXT = "" + FILE + TOOL + "/extract-line-chunk-before-after-text";
exports.FILE_TOOL_EXTRACT_LINE_CHUNK_BETWEEN_TEXT = "" + FILE + TOOL + "/extract-line-chunk-between-text";
exports.FILE_TOOL_EXTRACT_LINES_CONTAINING_TEXT = "" + FILE + TOOL + "/extract-lines-containing-text";
exports.FILE_TOOL_EXTRACT_NON_ALPHANUMERIC_CHARACTERS = "" + FILE + TOOL + "/extract-non-alphanumeric-characters";
exports.FILE_TOOL_EXTRACT_RANDOM_LINES = "" + FILE + TOOL + "/extract-random-lines";
exports.FILE_TOOL_EXTRACT_ROWS = "" + FILE + TOOL + "/extract-rows";
exports.FILE_TOOL_FIND_AND_REPLACE = "" + FILE + TOOL + "/find-and-replace";
exports.FILE_TOOL_REMOVE_BLANK_LINES = "" + FILE + TOOL + "/remove-blank-lines";
exports.FILE_TOOL_REMOVE_COLUMNS = "" + FILE + TOOL + "/remove-columns";
exports.FILE_TOOL_REMOVE_DUPLICATE_LINES = "" + FILE + TOOL + "/remove-duplicate-lines";
exports.FILE_TOOL_REMOVE_EVERY_NTH_LINE = "" + FILE + TOOL + "/remove-every-nth-line";
exports.FILE_TOOL_REMOVE_LINE_CHUNK_BETWEEN_TEXT = "" + FILE + TOOL + "/remove-line-chunk-between-text";
exports.FILE_TOOL_REMOVE_LINES_CONTAINING_TEXT = "" + FILE + TOOL + "/remove-lines-containing-text";
exports.FILE_TOOL_REMOVE_NEW_LINES = "" + FILE + TOOL + "/remove-new-lines";
exports.FILE_TOOL_REMOVE_NON_ALPHANUMERIC_CHARACTERS = "" + FILE + TOOL + "/remove-non-alphanumeric-characters";
exports.FILE_TOOL_REMOVE_ROWS = "" + FILE + TOOL + "/remove-rows";
exports.FILE_TOOL_SORT_LINES = "" + FILE + TOOL + "/sort-lines";
exports.FILE_TOOL_TRIM_LINES = "" + FILE + TOOL + "/trim-lines";
exports.FILE_TOOL_WEB_EXTRACTION = "" + FILE + TOOL + "/web-extraction";
exports.TOOL_ADD_INCREMENTAL_NUMBER = TOOL + "/add-incremental-number";
exports.TOOL_ADD_NEW_LINE = TOOL + "/add-new-line";
exports.TOOL_ADD_PREFIX = TOOL + "/add-prefix";
exports.TOOL_ADD_SUFFIX = TOOL + "/add-suffix";
exports.TOOL_ADD_TEXT_AT_LINES = TOOL + "/add-text-at-lines";
exports.TOOL_ADD_TEXT_EVERY_NTH_LINE = TOOL + "/add-text-every-nth-line";
exports.TOOL_CONVERT_CASE = TOOL + "/convert-case";
exports.TOOL_DECODE = TOOL + "/decode";
exports.TOOL_ENCODE = TOOL + "/encode";
exports.TOOL_EXTRACT_COLUMNS = TOOL + "/extract-columns";
exports.TOOL_EXTRACT_EVERY_NTH_LINE = TOOL + "/extract-every-nth-line";
exports.TOOL_EXTRACT_LINE_CHUNK_BEFORE_AFTER_NTH_CHARACTER = TOOL + "/extract-line-chunk-before-after-nth-character";
exports.TOOL_EXTRACT_LINE_CHUNK_BEFORE_AFTER_NTH_WORD = TOOL + "/extract-line-chunk-before-after-nth-word";
exports.TOOL_EXTRACT_LINE_CHUNK_BEFORE_AFTER_TEXT = TOOL + "/extract-line-chunk-before-after-text";
exports.TOOL_EXTRACT_LINE_CHUNK_BETWEEN_TEXT = TOOL + "/extract-line-chunk-between-text";
exports.TOOL_EXTRACT_LINES_CONTAINING_TEXT = TOOL + "/extract-lines-containing-text";
exports.TOOL_EXTRACT_NON_ALPHANUMERIC_CHARACTERS = TOOL + "/extract-non-alphanumeric-characters";
exports.TOOL_EXTRACT_RANDOM_LINES = TOOL + "/extract-random-lines";
exports.TOOL_EXTRACT_ROWS = TOOL + "/extract-rows";
exports.TOOL_FIND_AND_REPLACE = TOOL + "/find-and-replace";
exports.TOOL_REMOVE_BLANK_LINES = TOOL + "/remove-blank-lines";
exports.TOOL_REMOVE_COLUMNS = TOOL + "/remove-columns";
exports.TOOL_REMOVE_DUPLICATE_LINES = TOOL + "/remove-duplicate-lines";
exports.TOOL_REMOVE_EVERY_NTH_LINE = TOOL + "/remove-every-nth-line";
exports.TOOL_REMOVE_LINE_CHUNK_BETWEEN_TEXT = TOOL + "/remove-line-chunk-between-text";
exports.TOOL_REMOVE_LINES_CONTAINING_TEXT = TOOL + "/remove-lines-containing-text";
exports.TOOL_REMOVE_NEW_LINES = TOOL + "/remove-new-lines";
exports.TOOL_REMOVE_NON_ALPHANUMERIC_CHARACTERS = TOOL + "/remove-non-alphanumeric-characters";
exports.TOOL_REMOVE_ROWS = TOOL + "/remove-rows";
exports.TOOL_SORT_LINES = TOOL + "/sort-lines";
exports.TOOL_TRIM_LINES = TOOL + "/trim-lines";
exports.TOOL_WEB_EXTRACTION = TOOL + "/web-extraction";
exports.ENDPOINTS = [
    exports.FILE_TEXT,
    exports.FILE_TOOL_ADD_INCREMENTAL_NUMBER,
    exports.FILE_TOOL_ADD_NEW_LINE,
    exports.FILE_TOOL_ADD_PREFIX,
    exports.FILE_TOOL_ADD_SUFFIX,
    exports.FILE_TOOL_ADD_TEXT_AT_LINES,
    exports.FILE_TOOL_ADD_TEXT_EVERY_NTH_LINE,
    exports.FILE_TOOL_CONVERT_CASE,
    exports.FILE_TOOL_DECODE,
    exports.FILE_TOOL_ENCODE,
    exports.FILE_TOOL_EXTRACT_COLUMNS,
    exports.FILE_TOOL_EXTRACT_EVERY_NTH_LINE,
    exports.FILE_TOOL_EXTRACT_LINE_CHUNK_BEFORE_AFTER_NTH_CHARACTER,
    exports.FILE_TOOL_EXTRACT_LINE_CHUNK_BEFORE_AFTER_NTH_WORD,
    exports.FILE_TOOL_EXTRACT_LINE_CHUNK_BEFORE_AFTER_TEXT,
    exports.FILE_TOOL_EXTRACT_LINE_CHUNK_BETWEEN_TEXT,
    exports.FILE_TOOL_EXTRACT_LINES_CONTAINING_TEXT,
    exports.FILE_TOOL_EXTRACT_NON_ALPHANUMERIC_CHARACTERS,
    exports.FILE_TOOL_EXTRACT_RANDOM_LINES,
    exports.FILE_TOOL_EXTRACT_ROWS,
    exports.FILE_TOOL_FIND_AND_REPLACE,
    exports.FILE_TOOL_REMOVE_BLANK_LINES,
    exports.FILE_TOOL_REMOVE_COLUMNS,
    exports.FILE_TOOL_REMOVE_DUPLICATE_LINES,
    exports.FILE_TOOL_REMOVE_EVERY_NTH_LINE,
    exports.FILE_TOOL_REMOVE_LINE_CHUNK_BETWEEN_TEXT,
    exports.FILE_TOOL_REMOVE_LINES_CONTAINING_TEXT,
    exports.FILE_TOOL_REMOVE_NEW_LINES,
    exports.FILE_TOOL_REMOVE_NON_ALPHANUMERIC_CHARACTERS,
    exports.FILE_TOOL_REMOVE_ROWS,
    exports.FILE_TOOL_SORT_LINES,
    exports.FILE_TOOL_TRIM_LINES,
    exports.FILE_TOOL_WEB_EXTRACTION,
    exports.TOOL_ADD_INCREMENTAL_NUMBER,
    exports.TOOL_ADD_NEW_LINE,
    exports.TOOL_ADD_PREFIX,
    exports.TOOL_ADD_SUFFIX,
    exports.TOOL_ADD_TEXT_AT_LINES,
    exports.TOOL_ADD_TEXT_EVERY_NTH_LINE,
    exports.TOOL_CONVERT_CASE,
    exports.TOOL_DECODE,
    exports.TOOL_ENCODE,
    exports.TOOL_EXTRACT_COLUMNS,
    exports.TOOL_EXTRACT_EVERY_NTH_LINE,
    exports.TOOL_EXTRACT_LINE_CHUNK_BEFORE_AFTER_NTH_CHARACTER,
    exports.TOOL_EXTRACT_LINE_CHUNK_BEFORE_AFTER_NTH_WORD,
    exports.TOOL_EXTRACT_LINE_CHUNK_BEFORE_AFTER_TEXT,
    exports.TOOL_EXTRACT_LINE_CHUNK_BETWEEN_TEXT,
    exports.TOOL_EXTRACT_LINES_CONTAINING_TEXT,
    exports.TOOL_EXTRACT_NON_ALPHANUMERIC_CHARACTERS,
    exports.TOOL_EXTRACT_RANDOM_LINES,
    exports.TOOL_EXTRACT_ROWS,
    exports.TOOL_FIND_AND_REPLACE,
    exports.TOOL_REMOVE_BLANK_LINES,
    exports.TOOL_REMOVE_COLUMNS,
    exports.TOOL_REMOVE_DUPLICATE_LINES,
    exports.TOOL_REMOVE_EVERY_NTH_LINE,
    exports.TOOL_REMOVE_LINE_CHUNK_BETWEEN_TEXT,
    exports.TOOL_REMOVE_LINES_CONTAINING_TEXT,
    exports.TOOL_REMOVE_NEW_LINES,
    exports.TOOL_REMOVE_NON_ALPHANUMERIC_CHARACTERS,
    exports.TOOL_REMOVE_ROWS,
    exports.TOOL_SORT_LINES,
    exports.TOOL_TRIM_LINES,
    exports.TOOL_WEB_EXTRACTION,
];
