

export function _bind(fn, ...args) {

  return function () {
    return fn.apply(undefined, args);
  };
}

export function _guard(promise, test) {
  var guarded = promise.finally(() => {
    if (!test()) {
      guarded._subscribers.length = 0;
    }
  });

  return guarded;
}

export function _objectIsAlive(object) {
  return !(Ember.get(object, 'isDestroyed') || Ember.get(object, 'isDestroying'));
}

export function guardDestroyedStore(promise, store, label) {
  var token = void 0;
  if (true /* DEBUG */) {
    token = store._trackAsyncRequestStart(label);
  }
  var wrapperPromise = Ember.RSVP.resolve(promise, label).then(v => promise);

  return _guard(wrapperPromise, () => {
    if (true /* DEBUG */) {
      store._trackAsyncRequestEnd(token);
    }
    return _objectIsAlive(store);
  });
}