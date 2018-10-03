define('ember-ajax/-private/promise', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    /**
     * AJAX Promise
     *
     * Sub-class of RSVP Promise that passes the XHR property on to the
     * child promise
     *
     * @extends RSVP.Promise
     * @private
     */
    class AJAXPromise extends Ember.RSVP.Promise {
        // NOTE: Only necessary due to broken definition of RSVP.Promise
        // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/26640
        constructor(executor, label) {
            // @ts-ignore
            super(executor, label);
        }
        /**
         * Overriding `.then` to add XHR to child promise
         */
        then(onFulfilled, onRejected, label) {
            const child = super.then(onFulfilled, onRejected, label);
            child.xhr = this.xhr;
            return child;
        }
    }
    exports.default = AJAXPromise;
});