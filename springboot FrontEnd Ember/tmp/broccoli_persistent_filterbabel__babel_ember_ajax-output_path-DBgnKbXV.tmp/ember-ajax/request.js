define('ember-ajax/request', ['exports', 'ember-ajax/ajax-request'], function (exports, _ajaxRequest) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = request;

  /**
   * Helper function that allows you to use the default `ember-ajax` to make
   * requests without using the service.
   *
   * @public
   */
  function request(url, options) {
    const ajax = new _ajaxRequest.default();
    return ajax.request(url, options);
  }
});