import Ember from 'ember';
import startApp from '../helpers/start-app';
import Foo from 'dummy/models/foo';
import { test, moduleFor } from 'ember-qunit';

var App;

module( 'Acceptance: SingleModel', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /singleModel', function() {
  visit('/demos/singleModel/1');

  andThen(function() {
    var singleModelController = App.__container__.lookup('controller:demos/singleModel');
    equal(currentPath(), 'demos.singleModel');
    ok( singleModelController.get('model') instanceof Foo, 'Controllers model is instance of Foo' );
  });
});
