define('springboot/tests/lint/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/hello-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/hello-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/comment-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/comment-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/homepage-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/homepage-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/comment-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/comment-test.js should pass ESLint\n\n');
  });
});