define('ember-ajax/mixins/ajax-support', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    /**
     * The AJAX service to send requests through
     *
     * @property {AjaxService} ajaxService
     * @public
     */
    ajaxService: Ember.inject.service('ajax'),
    /**
     * @property {string} host
     * @public
     */
    host: Ember.computed.alias('ajaxService.host'),
    /**
     * @property {string} namespace
     * @public
     */
    namespace: Ember.computed.alias('ajaxService.namespace'),
    /**
     * @property {object} headers
     * @public
     */
    headers: Ember.computed.alias('ajaxService.headers'),
    ajax(url, _method, _options) {
      // @ts-ignore
      const augmentedOptions = this.ajaxOptions(...arguments);
      return Ember.get(this, 'ajaxService').request(url, augmentedOptions);
    }
  });
});