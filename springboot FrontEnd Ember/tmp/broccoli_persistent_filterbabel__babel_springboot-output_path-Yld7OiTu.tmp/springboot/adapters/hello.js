define('springboot/adapters/hello', ['exports', 'springboot/adapters/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({
    pathForType() {

      return 'hello';
    }

  });
});