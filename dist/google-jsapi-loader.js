'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.core = core;
exports.visualization = visualization;
var INTERVAL = 100;
var MAX_RETRIES = 20;

function core() {
  return new Promise(function (resolve, reject) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://www.google.com/jsapi';
    document.getElementsByTagName('body')[0].appendChild(s);

    var retries = 0;
    function ready() {
      if (global && global.google) {
        clearInterval(interval);
        return resolve();
      } else if (retries > MAX_RETRIES) {
        return reject();
      }
      retries++;
    }

    var interval = setInterval(ready, INTERVAL);
  });
}

function visualization() {
  return core().then(function () {
    return new Promise(function (resolve) {
      global.google.load('visualization', '1', {
        packages: ['corechart'],
        callback: function callback() {
          return resolve();
        }
      });
    });
  });
}
