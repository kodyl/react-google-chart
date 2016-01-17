'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateId;
function generateId() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$len = _ref.len;
  var len = _ref$len === undefined ? 6 : _ref$len;
  var _ref$charset = _ref.charset;
  var charset = _ref$charset === undefined ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' : _ref$charset;
  var _ref$str = _ref.str;
  var str = _ref$str === undefined ? '' : _ref$str;

  var charsetLength = charset.length;
  for (var i = len; i; i--) {
    str += charset.charAt(Math.floor(Math.random() * charsetLength));
  }
  return str;
}
