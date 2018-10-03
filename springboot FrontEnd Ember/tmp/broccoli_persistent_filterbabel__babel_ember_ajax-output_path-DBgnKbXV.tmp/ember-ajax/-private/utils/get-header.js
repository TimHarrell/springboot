define('ember-ajax/-private/utils/get-header', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = getHeader;

    /**
     * Do a case-insensitive lookup of an HTTP header
     *
     * @function getHeader
     * @private
     */
    function getHeader(headers, name) {
        if (Ember.isNone(headers) || Ember.isNone(name)) {
            return undefined;
        }
        const matchedKey = Ember.A(Object.keys(headers)).find(key => {
            return key.toLowerCase() === name.toLowerCase();
        });
        return matchedKey ? headers[matchedKey] : undefined;
    }
});