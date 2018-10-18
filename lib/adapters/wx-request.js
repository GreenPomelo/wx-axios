"use strict";
var buildURL = require("./../helpers/buildURL");

module.exports = function wxAdapter(config) {
  return new Promise(function dispatchWxRequest(resolve, reject) {
    var data = config.data;
    var headers = config.headers;
    var request = wx.request;
    var url = buildURL(config.url, config.params, config.paramsSerializer);

    request({
      url: url,
      method: config.method.toUpperCase(),
      data: data,
      header: headers,
      success: function(res) {
        res.config = config;
        resolve(res);
      },
      fail: function() {
        reject();
      }
    });
  });
};
