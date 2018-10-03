import { singularize } from 'ember-inflector';

import normalizeModelName from './normalize-model-name';

export function typeForRelationshipMeta(meta) {
  var modelName = void 0;

  modelName = meta.type || meta.key;
  modelName = normalizeModelName(modelName);

  if (meta.kind === 'hasMany') {
    modelName = singularize(modelName);
  }

  return modelName;
}

function shouldFindInverse(relationshipMeta) {
  var options = relationshipMeta.options;
  return !(options && options.inverse === null);
}

class RelationshipDefinition {
  constructor(meta) {
    this.meta = meta;
    this._type = '';
    this.__inverseKey = '';
    this.__inverseIsAsync = null;
    this.modelClass = meta.parentType;
    this.store = null;
  }

  get key() {
    return this.meta.key;
  }
  get kind() {
    return this.meta.kind;
  }
  get type() {
    if (this._type) {
      return this._type;
    }
    this._type = typeForRelationshipMeta(this.meta);
    return this._type;
  }
  get options() {
    return this.meta.options;
  }
  get name() {
    return this.meta.name;
  }
  get parentType() {
    return this.meta.parentType;
  }

  _inverseKey(store, modelClass) {
    if (this.__inverseKey === '') {
      this._calculateInverse(store, modelClass);
    }
    return this.__inverseKey;
  }

  _inverseIsAsync(store, modelClass) {
    if (this.__inverseIsAsync === null) {
      this._calculateInverse(store, modelClass);
    }
    return this.__inverseIsAsync;
  }

  _calculateInverse(store, modelClass) {
    var inverseKey = void 0,
        inverseIsAsync = void 0;
    var inverse = null;

    if (shouldFindInverse(this.meta)) {
      inverse = modelClass.inverseFor(this.key, store);
    } else if (true /* DEBUG */) {
      modelClass.typeForRelationship(this.key, store);
    }

    if (inverse) {
      inverseKey = inverse.name;
      inverseIsAsync = isInverseAsync(inverse);
    } else {
      inverseKey = null;
      inverseIsAsync = false;
    }
    this.__inverseKey = inverseKey;
    this.__inverseIsAsync = inverseIsAsync;
  }
}

function isInverseAsync(meta) {
  var inverseAsync = meta.options && meta.options.async;
  return typeof inverseAsync === 'undefined' ? true : inverseAsync;
}

export function relationshipFromMeta(meta) {
  return new RelationshipDefinition(meta);
}