
import MapWithDefault from '../map-with-default';
import Map from '../map';

import { typeForRelationshipMeta, relationshipFromMeta } from '../relationship-meta';

export var relationshipsDescriptor = Ember.computed(function () {
  var map = new MapWithDefault({
    defaultValue() {
      return [];
    }
  });

  var relationshipsByName = Ember.get(this, 'relationshipsByName');

  // Loop through each computed property on the class
  relationshipsByName.forEach(desc => {
    var relationshipsForType = map.get(desc.type);
    relationshipsForType.push(desc);
  });

  return map;
}).readOnly();

export var relatedTypesDescriptor = Ember.computed(function () {
  var modelName = void 0;
  var types = Ember.A();

  // Loop through each computed property on the class,
  // and create an array of the unique types involved
  // in relationships
  this.eachComputedProperty((name, meta) => {
    if (meta.isRelationship) {
      meta.key = name;
      modelName = typeForRelationshipMeta(meta);

      (true && !(modelName) && Ember.assert(`You specified a hasMany (${meta.type}) on ${meta.parentType} but ${meta.type} was not found.`, modelName));


      if (!types.includes(modelName)) {
        (true && !(!!modelName) && Ember.assert(`Trying to sideload ${name} on ${this.toString()} but the type doesn't exist.`, !!modelName));

        types.push(modelName);
      }
    }
  });

  return types;
}).readOnly();

export var relationshipsByNameDescriptor = Ember.computed(function () {
  var map = new Map();

  this.eachComputedProperty((name, meta) => {
    if (meta.isRelationship) {
      meta.key = name;
      meta.name = name;
      map.set(name, relationshipFromMeta(meta));
    }
  });

  return map;
}).readOnly();