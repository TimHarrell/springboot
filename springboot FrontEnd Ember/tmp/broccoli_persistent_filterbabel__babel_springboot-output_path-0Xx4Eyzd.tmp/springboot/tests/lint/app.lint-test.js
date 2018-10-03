define('springboot/tests/lint/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/hello.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/hello.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('models/comment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/comment.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/homepage.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/homepage.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/comment.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/comment.js should pass ESLint\n\n6:9 - Unexpected console statement. (no-console)');
  });
});