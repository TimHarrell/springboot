define('ember-ajax/services/ajax', ['exports', 'ember-ajax/mixins/ajax-request'], function (exports, _ajaxRequest) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AjaxServiceClass = undefined;

  const AjaxService = Ember.Service.extend(_ajaxRequest.default);
  exports.default = AjaxService;

  // DO NOT DELETE: this is how TypeScript knows how to look up your services.
  class AjaxServiceClass extends AjaxService {}
  exports.AjaxServiceClass = AjaxServiceClass;
});