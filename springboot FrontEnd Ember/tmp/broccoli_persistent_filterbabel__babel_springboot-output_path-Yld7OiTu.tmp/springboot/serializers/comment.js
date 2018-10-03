define('springboot/serializers/comment', ['exports', 'ember-data'], function (exports, _emberData) {
       'use strict';

       Object.defineProperty(exports, "__esModule", {
              value: true
       });
       exports.default = _emberData.default.RESTSerializer.extend({

              normalizeResponse(store, primaryModelClass, payload, id, requestType) {
                     console.log(payload);
                     payload = { comment: payload };
                     return this._super(store, primaryModelClass, payload, id, requestType);
              }

       });
});