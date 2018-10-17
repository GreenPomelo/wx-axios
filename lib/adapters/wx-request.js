"use strict";
const buildURL = require("./../helpers/buildURL");

module.exports = function wxAdapter(config) {
  return new Promise(function dispatchWxRequest(resolve, reject) {
    const data = config.data;
    const headers = config.headers;
    const request = wx.request;
    const url = buildURL(config.url, config.params, config.paramsSerializer);

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
