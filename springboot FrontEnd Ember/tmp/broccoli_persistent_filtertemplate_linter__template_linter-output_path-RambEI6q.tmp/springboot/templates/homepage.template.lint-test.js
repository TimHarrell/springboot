QUnit.test('springboot/templates/homepage.hbs', function(assert) {
  assert.expect(1);
  assert.ok(false, 'springboot/templates/homepage.hbs should pass TemplateLint.\n\nspringboot/templates/homepage.hbs\n  3:0  error  Incorrect indentation for `<h2>` beginning at L3:C0. Expected `<h2>` to be at an indentation of 2 but was found at 0.  block-indentation\n  5:0  error  Incorrect indentation for `{{#each}}` beginning at L5:C0. Expected `{{#each}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  6:0  error  Incorrect indentation for `<h4>` beginning at L6:C0. Expected `<h4>` to be at an indentation of 2 but was found at 0.  block-indentation\n');
});
