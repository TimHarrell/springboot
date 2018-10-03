import EmberOrderedSet from '@ember/ordered-set';


export default class EmberDataOrderedSet extends EmberOrderedSet {
  static create() {
    return new this();
  }

  addWithIndex(obj, idx) {
    var guid = Ember.guidFor(obj);
    var presenceSet = this.presenceSet;
    var list = this.list;

    if (presenceSet[guid] === true) {
      return;
    }

    presenceSet[guid] = true;

    if (idx === undefined || idx === null) {
      list.push(obj);
    } else {
      list.splice(idx, 0, obj);
    }

    this.size += 1;

    return this;
  }
}