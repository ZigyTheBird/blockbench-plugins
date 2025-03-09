/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayAggregator.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_arrayAggregator.js ***!
  \*************************************************/
/***/ ((module) => {

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

module.exports = arrayAggregator;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludes.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayIncludes.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash/_arrayIncludesWith.js ***!
  \***************************************************/
/***/ ((module) => {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAggregator.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseAggregator.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js");

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

module.exports = baseAggregator;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIndexOf.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ "./node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ "./node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNaN.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsNaN.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_baseUniq.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseUniq.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "./node_modules/lodash/_arrayIncludesWith.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js"),
    createSet = __webpack_require__(/*! ./_createSet */ "./node_modules/lodash/_createSet.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createAggregator.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_createAggregator.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayAggregator = __webpack_require__(/*! ./_arrayAggregator */ "./node_modules/lodash/_arrayAggregator.js"),
    baseAggregator = __webpack_require__(/*! ./_baseAggregator */ "./node_modules/lodash/_baseAggregator.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
  };
}

module.exports = createAggregator;


/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_createSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_createSet.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    noop = __webpack_require__(/*! ./noop */ "./node_modules/lodash/noop.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/***/ ((module) => {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_strictIndexOf.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_strictIndexOf.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/groupBy.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/groupBy.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    createAggregator = __webpack_require__(/*! ./_createAggregator */ "./node_modules/lodash/_createAggregator.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    baseAssignValue(result, key, [value]);
  }
});

module.exports = groupBy;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/mapValues.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/mapValues.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js");

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/noop.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/noop.js ***!
  \*************************************/
/***/ ((module) => {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/uniq.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/uniq.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseUniq = __webpack_require__(/*! ./_baseUniq */ "./node_modules/lodash/_baseUniq.js");

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),

/***/ "./node_modules/semver/classes/comparator.js":
/*!***************************************************!*\
  !*** ./node_modules/semver/classes/comparator.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ANY = Symbol('SemVer ANY')
// hoisted class for cyclic dependency
class Comparator {
  static get ANY () {
    return ANY
  }
  constructor (comp, options) {
    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      }
    }

    if (comp instanceof Comparator) {
      if (comp.loose === !!options.loose) {
        return comp
      } else {
        comp = comp.value
      }
    }

    debug('comparator', comp, options)
    this.options = options
    this.loose = !!options.loose
    this.parse(comp)

    if (this.semver === ANY) {
      this.value = ''
    } else {
      this.value = this.operator + this.semver.version
    }

    debug('comp', this)
  }

  parse (comp) {
    const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
    const m = comp.match(r)

    if (!m) {
      throw new TypeError(`Invalid comparator: ${comp}`)
    }

    this.operator = m[1] !== undefined ? m[1] : ''
    if (this.operator === '=') {
      this.operator = ''
    }

    // if it literally is just '>' or '' then allow anything.
    if (!m[2]) {
      this.semver = ANY
    } else {
      this.semver = new SemVer(m[2], this.options.loose)
    }
  }

  toString () {
    return this.value
  }

  test (version) {
    debug('Comparator.test', version, this.options.loose)

    if (this.semver === ANY || version === ANY) {
      return true
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    return cmp(version, this.operator, this.semver, this.options)
  }

  intersects (comp, options) {
    if (!(comp instanceof Comparator)) {
      throw new TypeError('a Comparator is required')
    }

    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      }
    }

    if (this.operator === '') {
      if (this.value === '') {
        return true
      }
      return new Range(comp.value, options).test(this.value)
    } else if (comp.operator === '') {
      if (comp.value === '') {
        return true
      }
      return new Range(this.value, options).test(comp.semver)
    }

    const sameDirectionIncreasing =
      (this.operator === '>=' || this.operator === '>') &&
      (comp.operator === '>=' || comp.operator === '>')
    const sameDirectionDecreasing =
      (this.operator === '<=' || this.operator === '<') &&
      (comp.operator === '<=' || comp.operator === '<')
    const sameSemVer = this.semver.version === comp.semver.version
    const differentDirectionsInclusive =
      (this.operator === '>=' || this.operator === '<=') &&
      (comp.operator === '>=' || comp.operator === '<=')
    const oppositeDirectionsLessThan =
      cmp(this.semver, '<', comp.semver, options) &&
      (this.operator === '>=' || this.operator === '>') &&
        (comp.operator === '<=' || comp.operator === '<')
    const oppositeDirectionsGreaterThan =
      cmp(this.semver, '>', comp.semver, options) &&
      (this.operator === '<=' || this.operator === '<') &&
        (comp.operator === '>=' || comp.operator === '>')

    return (
      sameDirectionIncreasing ||
      sameDirectionDecreasing ||
      (sameSemVer && differentDirectionsInclusive) ||
      oppositeDirectionsLessThan ||
      oppositeDirectionsGreaterThan
    )
  }
}

module.exports = Comparator

const {re, t} = __webpack_require__(/*! ../internal/re */ "./node_modules/semver/internal/re.js")
const cmp = __webpack_require__(/*! ../functions/cmp */ "./node_modules/semver/functions/cmp.js")
const debug = __webpack_require__(/*! ../internal/debug */ "./node_modules/semver/internal/debug.js")
const SemVer = __webpack_require__(/*! ./semver */ "./node_modules/semver/classes/semver.js")
const Range = __webpack_require__(/*! ./range */ "./node_modules/semver/classes/range.js")


/***/ }),

/***/ "./node_modules/semver/classes/range.js":
/*!**********************************************!*\
  !*** ./node_modules/semver/classes/range.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// hoisted class for cyclic dependency
class Range {
  constructor (range, options) {
    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      }
    }

    if (range instanceof Range) {
      if (
        range.loose === !!options.loose &&
        range.includePrerelease === !!options.includePrerelease
      ) {
        return range
      } else {
        return new Range(range.raw, options)
      }
    }

    if (range instanceof Comparator) {
      // just put it in the set and return
      this.raw = range.value
      this.set = [[range]]
      this.format()
      return this
    }

    this.options = options
    this.loose = !!options.loose
    this.includePrerelease = !!options.includePrerelease

    // First, split based on boolean or ||
    this.raw = range
    this.set = range
      .split(/\s*\|\|\s*/)
      // map the range to a 2d array of comparators
      .map(range => this.parseRange(range.trim()))
      // throw out any comparator lists that are empty
      // this generally means that it was not a valid range, which is allowed
      // in loose mode, but will still throw if the WHOLE range is invalid.
      .filter(c => c.length)

    if (!this.set.length) {
      throw new TypeError(`Invalid SemVer Range: ${range}`)
    }

    this.format()
  }

  format () {
    this.range = this.set
      .map((comps) => {
        return comps.join(' ').trim()
      })
      .join('||')
      .trim()
    return this.range
  }

  toString () {
    return this.range
  }

  parseRange (range) {
    const loose = this.options.loose
    range = range.trim()
    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
    const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE]
    range = range.replace(hr, hyphenReplace(this.options.includePrerelease))
    debug('hyphen replace', range)
    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
    range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace)
    debug('comparator trim', range, re[t.COMPARATORTRIM])

    // `~ 1.2.3` => `~1.2.3`
    range = range.replace(re[t.TILDETRIM], tildeTrimReplace)

    // `^ 1.2.3` => `^1.2.3`
    range = range.replace(re[t.CARETTRIM], caretTrimReplace)

    // normalize spaces
    range = range.split(/\s+/).join(' ')

    // At this point, the range is completely trimmed and
    // ready to be split into comparators.

    const compRe = loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
    return range
      .split(' ')
      .map(comp => parseComparator(comp, this.options))
      .join(' ')
      .split(/\s+/)
      .map(comp => replaceGTE0(comp, this.options))
      // in loose mode, throw out any that are not valid comparators
      .filter(this.options.loose ? comp => !!comp.match(compRe) : () => true)
      .map(comp => new Comparator(comp, this.options))
  }

  intersects (range, options) {
    if (!(range instanceof Range)) {
      throw new TypeError('a Range is required')
    }

    return this.set.some((thisComparators) => {
      return (
        isSatisfiable(thisComparators, options) &&
        range.set.some((rangeComparators) => {
          return (
            isSatisfiable(rangeComparators, options) &&
            thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options)
              })
            })
          )
        })
      )
    })
  }

  // if ANY of the sets match ALL of its comparators, then pass
  test (version) {
    if (!version) {
      return false
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    for (let i = 0; i < this.set.length; i++) {
      if (testSet(this.set[i], version, this.options)) {
        return true
      }
    }
    return false
  }
}
module.exports = Range

const Comparator = __webpack_require__(/*! ./comparator */ "./node_modules/semver/classes/comparator.js")
const debug = __webpack_require__(/*! ../internal/debug */ "./node_modules/semver/internal/debug.js")
const SemVer = __webpack_require__(/*! ./semver */ "./node_modules/semver/classes/semver.js")
const {
  re,
  t,
  comparatorTrimReplace,
  tildeTrimReplace,
  caretTrimReplace
} = __webpack_require__(/*! ../internal/re */ "./node_modules/semver/internal/re.js")

// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options) => {
  let result = true
  const remainingComparators = comparators.slice()
  let testComparator = remainingComparators.pop()

  while (result && remainingComparators.length) {
    result = remainingComparators.every((otherComparator) => {
      return testComparator.intersects(otherComparator, options)
    })

    testComparator = remainingComparators.pop()
  }

  return result
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options) => {
  debug('comp', comp, options)
  comp = replaceCarets(comp, options)
  debug('caret', comp)
  comp = replaceTildes(comp, options)
  debug('tildes', comp)
  comp = replaceXRanges(comp, options)
  debug('xrange', comp)
  comp = replaceStars(comp, options)
  debug('stars', comp)
  return comp
}

const isX = id => !id || id.toLowerCase() === 'x' || id === '*'

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
const replaceTildes = (comp, options) =>
  comp.trim().split(/\s+/).map((comp) => {
    return replaceTilde(comp, options)
  }).join(' ')

const replaceTilde = (comp, options) => {
  const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE]
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('tilde', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0 <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0-0
      ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`
    } else if (pr) {
      debug('replaceTilde pr', pr)
      ret = `>=${M}.${m}.${p}-${pr
      } <${M}.${+m + 1}.0-0`
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0-0
      ret = `>=${M}.${m}.${p
      } <${M}.${+m + 1}.0-0`
    }

    debug('tilde return', ret)
    return ret
  })
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
const replaceCarets = (comp, options) =>
  comp.trim().split(/\s+/).map((comp) => {
    return replaceCaret(comp, options)
  }).join(' ')

const replaceCaret = (comp, options) => {
  debug('caret', comp, options)
  const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET]
  const z = options.includePrerelease ? '-0' : ''
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('caret', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      if (M === '0') {
        ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`
      } else {
        ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`
      }
    } else if (pr) {
      debug('replaceCaret pr', pr)
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p}-${pr
        } <${+M + 1}.0.0-0`
      }
    } else {
      debug('no pr')
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p
        } <${+M + 1}.0.0-0`
      }
    }

    debug('caret return', ret)
    return ret
  })
}

const replaceXRanges = (comp, options) => {
  debug('replaceXRanges', comp, options)
  return comp.split(/\s+/).map((comp) => {
    return replaceXRange(comp, options)
  }).join(' ')
}

const replaceXRange = (comp, options) => {
  comp = comp.trim()
  const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE]
  return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
    debug('xRange', comp, ret, gtlt, M, m, p, pr)
    const xM = isX(M)
    const xm = xM || isX(m)
    const xp = xm || isX(p)
    const anyX = xp

    if (gtlt === '=' && anyX) {
      gtlt = ''
    }

    // if we're including prereleases in the match, then we need
    // to fix this to -0, the lowest possible prerelease value
    pr = options.includePrerelease ? '-0' : ''

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0-0'
      } else {
        // nothing is forbidden
        ret = '*'
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0
      }
      p = 0

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        gtlt = '>='
        if (xm) {
          M = +M + 1
          m = 0
          p = 0
        } else {
          m = +m + 1
          p = 0
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<'
        if (xm) {
          M = +M + 1
        } else {
          m = +m + 1
        }
      }

      if (gtlt === '<')
        pr = '-0'

      ret = `${gtlt + M}.${m}.${p}${pr}`
    } else if (xm) {
      ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`
    } else if (xp) {
      ret = `>=${M}.${m}.0${pr
      } <${M}.${+m + 1}.0-0`
    }

    debug('xRange return', ret)

    return ret
  })
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options) => {
  debug('replaceStars', comp, options)
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[t.STAR], '')
}

const replaceGTE0 = (comp, options) => {
  debug('replaceGTE0', comp, options)
  return comp.trim()
    .replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '')
}

// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
const hyphenReplace = incPr => ($0,
  from, fM, fm, fp, fpr, fb,
  to, tM, tm, tp, tpr, tb) => {
  if (isX(fM)) {
    from = ''
  } else if (isX(fm)) {
    from = `>=${fM}.0.0${incPr ? '-0' : ''}`
  } else if (isX(fp)) {
    from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`
  } else if (fpr) {
    from = `>=${from}`
  } else {
    from = `>=${from}${incPr ? '-0' : ''}`
  }

  if (isX(tM)) {
    to = ''
  } else if (isX(tm)) {
    to = `<${+tM + 1}.0.0-0`
  } else if (isX(tp)) {
    to = `<${tM}.${+tm + 1}.0-0`
  } else if (tpr) {
    to = `<=${tM}.${tm}.${tp}-${tpr}`
  } else if (incPr) {
    to = `<${tM}.${tm}.${+tp + 1}-0`
  } else {
    to = `<=${to}`
  }

  return (`${from} ${to}`).trim()
}

const testSet = (set, version, options) => {
  for (let i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (let i = 0; i < set.length; i++) {
      debug(set[i].semver)
      if (set[i].semver === Comparator.ANY) {
        continue
      }

      if (set[i].semver.prerelease.length > 0) {
        const allowed = set[i].semver
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch) {
          return true
        }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false
  }

  return true
}


/***/ }),

/***/ "./node_modules/semver/classes/semver.js":
/*!***********************************************!*\
  !*** ./node_modules/semver/classes/semver.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const debug = __webpack_require__(/*! ../internal/debug */ "./node_modules/semver/internal/debug.js")
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __webpack_require__(/*! ../internal/constants */ "./node_modules/semver/internal/constants.js")
const { re, t } = __webpack_require__(/*! ../internal/re */ "./node_modules/semver/internal/re.js")

const { compareIdentifiers } = __webpack_require__(/*! ../internal/identifiers */ "./node_modules/semver/internal/identifiers.js")
class SemVer {
  constructor (version, options) {
    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      }
    }
    if (version instanceof SemVer) {
      if (version.loose === !!options.loose &&
          version.includePrerelease === !!options.includePrerelease) {
        return version
      } else {
        version = version.version
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      )
    }

    debug('SemVer', version, options)
    this.options = options
    this.loose = !!options.loose
    // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.
    this.includePrerelease = !!options.includePrerelease

    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL])

    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    this.raw = version

    // these are actually numbers
    this.major = +m[1]
    this.minor = +m[2]
    this.patch = +m[3]

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version')
    }

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version')
    }

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version')
    }

    // numberify any prerelease numeric ids
    if (!m[4]) {
      this.prerelease = []
    } else {
      this.prerelease = m[4].split('.').map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num
          }
        }
        return id
      })
    }

    this.build = m[5] ? m[5].split('.') : []
    this.format()
  }

  format () {
    this.version = `${this.major}.${this.minor}.${this.patch}`
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`
    }
    return this.version
  }

  toString () {
    return this.version
  }

  compare (other) {
    debug('SemVer.compare', this.version, this.options, other)
    if (!(other instanceof SemVer)) {
      if (typeof other === 'string' && other === this.version) {
        return 0
      }
      other = new SemVer(other, this.options)
    }

    if (other.version === this.version) {
      return 0
    }

    return this.compareMain(other) || this.comparePre(other)
  }

  compareMain (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    return (
      compareIdentifiers(this.major, other.major) ||
      compareIdentifiers(this.minor, other.minor) ||
      compareIdentifiers(this.patch, other.patch)
    )
  }

  comparePre (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    // NOT having a prerelease is > having one
    if (this.prerelease.length && !other.prerelease.length) {
      return -1
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0
    }

    let i = 0
    do {
      const a = this.prerelease[i]
      const b = other.prerelease[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  compareBuild (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    let i = 0
    do {
      const a = this.build[i]
      const b = other.build[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc (release, identifier) {
    switch (release) {
      case 'premajor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor = 0
        this.major++
        this.inc('pre', identifier)
        break
      case 'preminor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor++
        this.inc('pre', identifier)
        break
      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0
        this.inc('patch', identifier)
        this.inc('pre', identifier)
        break
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier)
        }
        this.inc('pre', identifier)
        break

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (
          this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0
        ) {
          this.major++
        }
        this.minor = 0
        this.patch = 0
        this.prerelease = []
        break
      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++
        }
        this.patch = 0
        this.prerelease = []
        break
      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) {
          this.patch++
        }
        this.prerelease = []
        break
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
      case 'pre':
        if (this.prerelease.length === 0) {
          this.prerelease = [0]
        } else {
          let i = this.prerelease.length
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++
              i = -2
            }
          }
          if (i === -1) {
            // didn't increment anything
            this.prerelease.push(0)
          }
        }
        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          if (this.prerelease[0] === identifier) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = [identifier, 0]
            }
          } else {
            this.prerelease = [identifier, 0]
          }
        }
        break

      default:
        throw new Error(`invalid increment argument: ${release}`)
    }
    this.format()
    this.raw = this.version
    return this
  }
}

module.exports = SemVer


/***/ }),

/***/ "./node_modules/semver/functions/cmp.js":
/*!**********************************************!*\
  !*** ./node_modules/semver/functions/cmp.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const eq = __webpack_require__(/*! ./eq */ "./node_modules/semver/functions/eq.js")
const neq = __webpack_require__(/*! ./neq */ "./node_modules/semver/functions/neq.js")
const gt = __webpack_require__(/*! ./gt */ "./node_modules/semver/functions/gt.js")
const gte = __webpack_require__(/*! ./gte */ "./node_modules/semver/functions/gte.js")
const lt = __webpack_require__(/*! ./lt */ "./node_modules/semver/functions/lt.js")
const lte = __webpack_require__(/*! ./lte */ "./node_modules/semver/functions/lte.js")

const cmp = (a, op, b, loose) => {
  switch (op) {
    case '===':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a === b

    case '!==':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a !== b

    case '':
    case '=':
    case '==':
      return eq(a, b, loose)

    case '!=':
      return neq(a, b, loose)

    case '>':
      return gt(a, b, loose)

    case '>=':
      return gte(a, b, loose)

    case '<':
      return lt(a, b, loose)

    case '<=':
      return lte(a, b, loose)

    default:
      throw new TypeError(`Invalid operator: ${op}`)
  }
}
module.exports = cmp


/***/ }),

/***/ "./node_modules/semver/functions/coerce.js":
/*!*************************************************!*\
  !*** ./node_modules/semver/functions/coerce.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const parse = __webpack_require__(/*! ./parse */ "./node_modules/semver/functions/parse.js")
const {re, t} = __webpack_require__(/*! ../internal/re */ "./node_modules/semver/internal/re.js")

const coerce = (version, options) => {
  if (version instanceof SemVer) {
    return version
  }

  if (typeof version === 'number') {
    version = String(version)
  }

  if (typeof version !== 'string') {
    return null
  }

  options = options || {}

  let match = null
  if (!options.rtl) {
    match = version.match(re[t.COERCE])
  } else {
    // Find the right-most coercible string that does not share
    // a terminus with a more left-ward coercible string.
    // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
    //
    // Walk through the string checking with a /g regexp
    // Manually set the index so as to pick up overlapping matches.
    // Stop when we get a match that ends at the string end, since no
    // coercible string can be more right-ward without the same terminus.
    let next
    while ((next = re[t.COERCERTL].exec(version)) &&
        (!match || match.index + match[0].length !== version.length)
    ) {
      if (!match ||
            next.index + next[0].length !== match.index + match[0].length) {
        match = next
      }
      re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length
    }
    // leave it in a clean state
    re[t.COERCERTL].lastIndex = -1
  }

  if (match === null)
    return null

  return parse(`${match[2]}.${match[3] || '0'}.${match[4] || '0'}`, options)
}
module.exports = coerce


/***/ }),

/***/ "./node_modules/semver/functions/compare.js":
/*!**************************************************!*\
  !*** ./node_modules/semver/functions/compare.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const compare = (a, b, loose) =>
  new SemVer(a, loose).compare(new SemVer(b, loose))

module.exports = compare


/***/ }),

/***/ "./node_modules/semver/functions/eq.js":
/*!*********************************************!*\
  !*** ./node_modules/semver/functions/eq.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const eq = (a, b, loose) => compare(a, b, loose) === 0
module.exports = eq


/***/ }),

/***/ "./node_modules/semver/functions/gt.js":
/*!*********************************************!*\
  !*** ./node_modules/semver/functions/gt.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const gt = (a, b, loose) => compare(a, b, loose) > 0
module.exports = gt


/***/ }),

/***/ "./node_modules/semver/functions/gte.js":
/*!**********************************************!*\
  !*** ./node_modules/semver/functions/gte.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const gte = (a, b, loose) => compare(a, b, loose) >= 0
module.exports = gte


/***/ }),

/***/ "./node_modules/semver/functions/lt.js":
/*!*********************************************!*\
  !*** ./node_modules/semver/functions/lt.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const lt = (a, b, loose) => compare(a, b, loose) < 0
module.exports = lt


/***/ }),

/***/ "./node_modules/semver/functions/lte.js":
/*!**********************************************!*\
  !*** ./node_modules/semver/functions/lte.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const lte = (a, b, loose) => compare(a, b, loose) <= 0
module.exports = lte


/***/ }),

/***/ "./node_modules/semver/functions/neq.js":
/*!**********************************************!*\
  !*** ./node_modules/semver/functions/neq.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const neq = (a, b, loose) => compare(a, b, loose) !== 0
module.exports = neq


/***/ }),

/***/ "./node_modules/semver/functions/parse.js":
/*!************************************************!*\
  !*** ./node_modules/semver/functions/parse.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {MAX_LENGTH} = __webpack_require__(/*! ../internal/constants */ "./node_modules/semver/internal/constants.js")
const { re, t } = __webpack_require__(/*! ../internal/re */ "./node_modules/semver/internal/re.js")
const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")

const parse = (version, options) => {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  if (version instanceof SemVer) {
    return version
  }

  if (typeof version !== 'string') {
    return null
  }

  if (version.length > MAX_LENGTH) {
    return null
  }

  const r = options.loose ? re[t.LOOSE] : re[t.FULL]
  if (!r.test(version)) {
    return null
  }

  try {
    return new SemVer(version, options)
  } catch (er) {
    return null
  }
}

module.exports = parse


/***/ }),

/***/ "./node_modules/semver/functions/satisfies.js":
/*!****************************************************!*\
  !*** ./node_modules/semver/functions/satisfies.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Range = __webpack_require__(/*! ../classes/range */ "./node_modules/semver/classes/range.js")
const satisfies = (version, range, options) => {
  try {
    range = new Range(range, options)
  } catch (er) {
    return false
  }
  return range.test(version)
}
module.exports = satisfies


/***/ }),

/***/ "./node_modules/semver/internal/constants.js":
/*!***************************************************!*\
  !*** ./node_modules/semver/internal/constants.js ***!
  \***************************************************/
/***/ ((module) => {

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0'

const MAX_LENGTH = 256
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
  /* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16

module.exports = {
  SEMVER_SPEC_VERSION,
  MAX_LENGTH,
  MAX_SAFE_INTEGER,
  MAX_SAFE_COMPONENT_LENGTH
}


/***/ }),

/***/ "./node_modules/semver/internal/debug.js":
/*!***********************************************!*\
  !*** ./node_modules/semver/internal/debug.js ***!
  \***********************************************/
/***/ ((module) => {

const debug = (
  typeof process === 'object' &&
  process.env &&
  process.env.NODE_DEBUG &&
  /\bsemver\b/i.test(process.env.NODE_DEBUG)
) ? (...args) => console.error('SEMVER', ...args)
  : () => {}

module.exports = debug


/***/ }),

/***/ "./node_modules/semver/internal/identifiers.js":
/*!*****************************************************!*\
  !*** ./node_modules/semver/internal/identifiers.js ***!
  \*****************************************************/
/***/ ((module) => {

const numeric = /^[0-9]+$/
const compareIdentifiers = (a, b) => {
  const anum = numeric.test(a)
  const bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a)

module.exports = {
  compareIdentifiers,
  rcompareIdentifiers
}


/***/ }),

/***/ "./node_modules/semver/internal/re.js":
/*!********************************************!*\
  !*** ./node_modules/semver/internal/re.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

const { MAX_SAFE_COMPONENT_LENGTH } = __webpack_require__(/*! ./constants */ "./node_modules/semver/internal/constants.js")
const debug = __webpack_require__(/*! ./debug */ "./node_modules/semver/internal/debug.js")
exports = module.exports = {}

// The actual regexps go on exports.re
const re = exports.re = []
const src = exports.src = []
const t = exports.t = {}
let R = 0

const createToken = (name, value, isGlobal) => {
  const index = R++
  debug(index, value)
  t[name] = index
  src[index] = value
  re[index] = new RegExp(value, isGlobal ? 'g' : undefined)
}

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*')
createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+')

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*')

// ## Main Version
// Three dot-separated numeric identifiers.

createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})`)

createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})`)

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]
}|${src[t.NONNUMERICIDENTIFIER]})`)

createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]
}|${src[t.NONNUMERICIDENTIFIER]})`)

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`)

createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`)

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+')

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
}(?:\\.${src[t.BUILDIDENTIFIER]})*))`)

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
}${src[t.PRERELEASE]}?${
  src[t.BUILD]}?`)

createToken('FULL', `^${src[t.FULLPLAIN]}$`)

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
}${src[t.PRERELEASELOOSE]}?${
  src[t.BUILD]}?`)

createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`)

createToken('GTLT', '((?:<|>)?=?)')

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`)
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`)

createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:${src[t.PRERELEASE]})?${
                     src[t.BUILD]}?` +
                   `)?)?`)

createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:${src[t.PRERELEASELOOSE]})?${
                          src[t.BUILD]}?` +
                        `)?)?`)

createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`)
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`)

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCE', `${'(^|[^\\d])' +
              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:$|[^\\d])`)
createToken('COERCERTL', src[t.COERCE], true)

// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)')

createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true)
exports.tildeTrimReplace = '$1~'

createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`)
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`)

// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)')

createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true)
exports.caretTrimReplace = '$1^'

createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`)
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`)

// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`)
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`)

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true)
exports.comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
                   `\\s+-\\s+` +
                   `(${src[t.XRANGEPLAIN]})` +
                   `\\s*$`)

createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s+-\\s+` +
                        `(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s*$`)

// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*')
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\.0\.0\\s*$')
createToken('GTE0PRE', '^\\s*>=\\s*0\.0\.0-0\\s*$')


/***/ }),

/***/ "./ts/animationUi.ts":
/*!***************************!*\
  !*** ./ts/animationUi.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayAnimationFrameCallback: () => (/* binding */ displayAnimationFrameCallback),
/* harmony export */   loadAnimationUI: () => (/* binding */ loadAnimationUI),
/* harmony export */   unloadAnimationUI: () => (/* binding */ unloadAnimationUI),
/* harmony export */   updateKeyframeEasing: () => (/* binding */ updateKeyframeEasing),
/* harmony export */   updateKeyframeEasingArg: () => (/* binding */ updateKeyframeEasingArg),
/* harmony export */   updateKeyframeSelectionCallback: () => (/* binding */ updateKeyframeSelectionCallback)
/* harmony export */ });
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/uniq */ "./node_modules/lodash/uniq.js");
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./ts/utils.ts");
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./easing */ "./ts/easing.ts");



const easingRegExp = /^ease(InOut|In|Out)?([\w]+)$/;
const loadAnimationUI = () => {
    Blockbench.on('display_animation_frame', displayAnimationFrameCallback);
    Blockbench.on('update_keyframe_selection', updateKeyframeSelectionCallback);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.addMonkeypatch)(window, null, "updateKeyframeEasing", updateKeyframeEasing);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.addMonkeypatch)(window, null, "updateKeyframeEasingArg", updateKeyframeEasingArg);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.addMonkeypatch)(BarItems.keyframe_interpolation, null, 'condition', () => Format.id !== "animated_entity_model" && _utils__WEBPACK_IMPORTED_MODULE_1__.Monkeypatches.get(BarItems.keyframe_interpolation).condition());
};
const unloadAnimationUI = () => {
    Blockbench.removeListener('display_animation_frame', displayAnimationFrameCallback);
    Blockbench.removeListener('update_keyframe_selection', updateKeyframeSelectionCallback);
};
const displayAnimationFrameCallback = ( /*...args*/) => {
    // const keyframe = $('#keyframe');
    // console.log('displayAnimationFrameCallback:', args, 'keyframe:', keyframe); // keyframe is null here
};
function updateKeyframeEasing(value) {
    Undo.initEdit({ keyframes: Timeline.selected });
    // var axis = $(obj).attr('axis');
    // const value = $(obj).val();
    // console.log('updateKeyframeEasing value:', value, 'obj:', obj); 
    if (value === "-")
        return;
    Timeline.selected.forEach((kf) => {
        kf.easing = value;
    });
    window.updateKeyframeSelection(); // Ensure easingArg display is updated
    // Animator.preview();
    Undo.finishEdit('edit keyframe easing');
}
function updateKeyframeEasingArg(obj) {
    Undo.initEdit({ keyframes: Timeline.selected });
    if ($(obj).val() === "-")
        return;
    // console.log('updateKeyframeEasingArg value:', $(obj).val(), 'obj:', obj); 
    Timeline.selected.forEach((kf) => {
        const value = (0,_easing__WEBPACK_IMPORTED_MODULE_2__.parseEasingArg)(kf, $(obj).val().trim());
        kf.easingArgs = [value];
        // obj.value = value;
    });
    Undo.finishEdit('edit keyframe easing argument');
}
const updateKeyframeSelectionCallback = ( /*...args*/) => {
    $('#keyframe_bar_easing').remove();
    $('#keyframe_bar_easing_type').remove();
    $('#keyframe_bar_easing_arg1').remove();
    const addPrePostButton = document.querySelector('#keyframe_type_label > div');
    if (addPrePostButton)
        addPrePostButton.hidden = Format.id === "animated_entity_model";
    let multi_channel = false; //eslint-disable-line @typescript-eslint/no-unused-vars
    let channel = false;
    Timeline.selected.forEach((kf) => {
        if (channel === false) {
            channel = kf.channel;
        }
        else if (channel !== kf.channel) {
            multi_channel = true;
        }
    });
    const getMultiSelectValue = (selector, defaultValue, conflictValue) => {
        const selectorFunction = typeof selector === 'function'
            ? selector
            : x => (x[selector] === undefined ? defaultValue : x[selector]);
        if (Timeline.selected.length > 1) {
            const uniqSelected = lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default()(Timeline.selected.map(selectorFunction));
            if (uniqSelected.length === 1) {
                return uniqSelected[0];
            }
            else {
                return conflictValue;
            }
        }
        else {
            return selectorFunction(Timeline.selected[0]) || defaultValue;
        }
    };
    const keyframesByChannel = Timeline.keyframes.reduce((acc, kf) => {
        // Dear god I miss lodash
        if (!acc.has(kf.animator))
            acc.set(kf.animator, {});
        const animatorChannels = acc.get(kf.animator);
        if (!animatorChannels[kf.channel])
            animatorChannels[kf.channel] = [];
        animatorChannels[kf.channel].push(kf);
        animatorChannels[kf.channel].sort((a, b) => {
            if (a.time < b.time)
                return -1;
            if (a.time > b.time)
                return 1;
            return 0;
        });
        return acc;
    }, new Map());
    const isFirstInChannel = (kf) => keyframesByChannel.get(kf.animator)[kf.channel].indexOf(kf) < 1;
    if (Timeline.selected.length && Format.id === "animated_entity_model") {
        if (Timeline.selected.every(kf => kf.animator instanceof BoneAnimator && !isFirstInChannel(kf))) {
            const displayedEasing = getMultiSelectValue('easing', _easing__WEBPACK_IMPORTED_MODULE_2__.EASING_DEFAULT, 'null');
            const convertEasingTypeToId = (easing, easingType, inputEasingOrType) => {
                const easingTypeToTypeId = type => {
                    let finalEasingType = "In";
                    if (type === "out") {
                        finalEasingType = "Out";
                    }
                    else if (type === "inout") {
                        finalEasingType = "InOut";
                    }
                    return finalEasingType;
                };
                let finalEasing = 'ease';
                if (inputEasingOrType === "in" || inputEasingOrType === "out" || inputEasingOrType === "inout") {
                    const finalEasingType = easingTypeToTypeId(inputEasingOrType);
                    finalEasing += finalEasingType + easing.substring(0, 1).toUpperCase() + easing.substring(1);
                }
                else if (inputEasingOrType === "linear" || inputEasingOrType == "step" || inputEasingOrType == "single_step" || inputEasingOrType == "catmullrom") {
                    finalEasing = inputEasingOrType;
                }
                else {
                    const finalEasingType = easingTypeToTypeId(easingType);
                    finalEasing += finalEasingType + inputEasingOrType.substring(0, 1).toUpperCase() + inputEasingOrType.substring(1);
                }
                return finalEasing;
            };
            const addEasingTypeIcons = (bar, easingType, title) => {
                const div = document.createElement("div");
                div.innerHTML = getIcon(easingType);
                div.id = "kf_easing_type_" + easingType;
                div.setAttribute("style", "stroke:var(--color-text);margin:0px;padding:3px;width:30px;height:30px");
                div.setAttribute("title", title);
                div.onclick = () => {
                    const selectedEasing = $(".selected_kf_easing");
                    const selectedEasingType = $(".selected_kf_easing_type");
                    const keySelectedEasing = selectedEasing.attr("id").substring(15);
                    const keySelectedEasingType = selectedEasingType.length <= 0 ? "in" : selectedEasingType.attr("id").substring(15);
                    const currentEasing = convertEasingTypeToId(keySelectedEasing, keySelectedEasingType, keySelectedEasing);
                    const finalEasing = convertEasingTypeToId(keySelectedEasing, keySelectedEasingType, easingType);
                    if (finalEasing != currentEasing) {
                        //   console.log("Changed from " + currentEasing + " to " + finalEasing);
                        updateKeyframeEasing(finalEasing);
                    }
                };
                bar.appendChild(div);
            };
            const keyframe = document.getElementById('panel_keyframe');
            let easingBar = document.createElement('div');
            keyframe.appendChild(easingBar);
            easingBar.outerHTML = `<div class="bar flex" style="flex-wrap: wrap" id="keyframe_bar_easing">
          <label class="tl" style="font-weight: bolder; min-width: 47px;">Easing</label>
        </div>`;
            easingBar = document.getElementById('keyframe_bar_easing');
            addEasingTypeIcons(easingBar, "linear", "Switch to Linear easing");
            addEasingTypeIcons(easingBar, "step", "Switch to Step easing");
            addEasingTypeIcons(easingBar, "sine", "Switch to Sine easing");
            addEasingTypeIcons(easingBar, "quad", "Switch to Quadratic easing");
            addEasingTypeIcons(easingBar, "cubic", "Switch to Cubic easing");
            addEasingTypeIcons(easingBar, "quart", "Switch to Quartic easing");
            addEasingTypeIcons(easingBar, "quint", "Switch to Quntic easing");
            addEasingTypeIcons(easingBar, "expo", "Switch to Exponential easing");
            addEasingTypeIcons(easingBar, "circ", "Switch to Cicle easing");
            addEasingTypeIcons(easingBar, "back", "Switch to Back easing");
            addEasingTypeIcons(easingBar, "elastic", "Switch to Elastic easing");
            addEasingTypeIcons(easingBar, "bounce", "Switch to Bounce easing");
            addEasingTypeIcons(easingBar, "catmullrom", "Switch to Catmull-Rom easing");
            addEasingTypeIcons(easingBar, "single_step", "Switch to no easing");
            const keyEasing = getEasingInterpolation(displayedEasing);
            const keyEasingElement = document.getElementById("kf_easing_type_" + keyEasing);
            keyEasingElement.style.stroke = "var(--color-accent)";
            keyEasingElement.classList.add('selected_kf_easing');
            if (!(keyEasing === "linear" || keyEasing == "step" || keyEasing == "single_step" || keyEasing == "catmullrom")) {
                let easingTypeBar = document.createElement('div');
                keyframe.appendChild(easingTypeBar);
                easingTypeBar.outerHTML = `<div class="bar flex" id="keyframe_bar_easing_type">
            <label class="tl" style="font-weight: bolder; min-width: 47px;">Type</label>
          </div>`;
                easingTypeBar = document.getElementById('keyframe_bar_easing_type');
                addEasingTypeIcons(easingTypeBar, "in", "Switch to In easing type");
                addEasingTypeIcons(easingTypeBar, "out", "Switch to Out easing type");
                addEasingTypeIcons(easingTypeBar, "inout", "Switch to In/Out easing type");
                const keyEasingType = getEasingType(displayedEasing);
                const keyEasingTypeElement = document.getElementById("kf_easing_type_" + keyEasingType);
                keyEasingTypeElement.style.stroke = "var(--color-accent)";
                keyEasingTypeElement.classList.add('selected_kf_easing_type');
            }
            const getEasingArgLabel = (kf) => {
                switch (kf.easing) {
                    case _easing__WEBPACK_IMPORTED_MODULE_2__.EASING_OPTIONS.easeInBack:
                    case _easing__WEBPACK_IMPORTED_MODULE_2__.EASING_OPTIONS.easeOutBack:
                    case _easing__WEBPACK_IMPORTED_MODULE_2__.EASING_OPTIONS.easeInOutBack:
                        return 'Overshoot';
                    case _easing__WEBPACK_IMPORTED_MODULE_2__.EASING_OPTIONS.easeInElastic:
                    case _easing__WEBPACK_IMPORTED_MODULE_2__.EASING_OPTIONS.easeOutElastic:
                    case _easing__WEBPACK_IMPORTED_MODULE_2__.EASING_OPTIONS.easeInOutElastic:
                    case _easing__WEBPACK_IMPORTED_MODULE_2__.EASING_OPTIONS.easeInBounce:
                    case _easing__WEBPACK_IMPORTED_MODULE_2__.EASING_OPTIONS.easeOutBounce:
                    case _easing__WEBPACK_IMPORTED_MODULE_2__.EASING_OPTIONS.easeInOutBounce:
                        return 'Bounciness';
                    case _easing__WEBPACK_IMPORTED_MODULE_2__.EASING_OPTIONS.step:
                        return 'Steps';
                    default:
                        return 'N/A';
                }
            };
            const easingArgLabel = getMultiSelectValue(getEasingArgLabel, null, null);
            if (Timeline.selected.every((kf) => (0,_easing__WEBPACK_IMPORTED_MODULE_2__.isArgsEasing)(kf.easing)) && easingArgLabel !== null) {
                const argDefault = getMultiSelectValue(_easing__WEBPACK_IMPORTED_MODULE_2__.getEasingArgDefault, null, null);
                const [displayedValue] = getMultiSelectValue('easingArgs', [argDefault], [argDefault]);
                let scaleBar = document.createElement('div');
                keyframe.appendChild(scaleBar);
                scaleBar.outerHTML = `<div class="bar flex" id="keyframe_bar_easing_arg1">
            <label class="tl" style="font-weight: bolder; min-width: 90px;">${easingArgLabel}</label>
            <input type="number" id="keyframe_easing_scale" class="dark_bordered code keyframe_input tab_target" value="${displayedValue}" oninput="updateKeyframeEasingArg(this)" style="flex: 1; margin-right: 9px;">
          </div>`;
                scaleBar = document.getElementById('keyframe_bar_easing_arg1');
            }
            // console.log('easingBar:', easingBar, 'keyframe:', keyframe);
        }
    }
};
const getEasingInterpolation = (name) => {
    const matches = name.match(easingRegExp);
    if (matches) {
        return matches[2].toLowerCase();
    }
    return name;
};
const getEasingType = (name) => {
    const matches = name.match(easingRegExp);
    if (matches) {
        return matches[1].toLowerCase();
    }
    return "in";
};
const getIcon = (name) => {
    switch (name) {
        case "back":
            return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="m 0.52916667,295.94165 c 3.17500003,0 4.23333333,2.91041 5.29166663,-4.7625" style="fill:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
        case "bounce":
            return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="m 0.52916667,296.47081 c 0.26458333,-0.26458 0.52916673,-0.26458 0.79375003,0 0.5291666,-0.52916 0.5291666,-0.52916 1.0583333,0 0.79375,-2.11666 1.5875,-2.11666 2.38125,0 0.2645833,-4.23333 1.0583333,-5.29165 1.0583333,-5.29165" style="fill:none;stroke-width:0.52899998;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
        case "circ":
            return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="M 0.52916667,296.47081 C 5.8208333,295.67706 5.8208333,293.82498 5.8208333,291.17915" style="fill:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
        case "cubic":
            return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="M 0.52916667,296.47081 C 3.175,296.47081 4.7625,293.82498 5.8208333,291.17915" style="fill:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
        case "elastic":
            return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="m 0.52916667,295.67706 c 0.79375003,0 0.79375003,-0.26458 1.32291663,-0.26458 0.5291667,0 0.79375,0.52917 1.3229167,0.52917 0.5291667,0 1.0094474,-1.83865 1.3229167,-0.79375 0.79375,2.64583 1.3229166,1.32292 1.3229166,-3.96874" style="fill:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
        case "expo":
        case "in":
            return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="m 0.52916667,296.47081 c 4.23333333,0 5.29166663,-1.05833 5.29166663,-5.29166" style="fill:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
        case "inout":
            return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="m 0.52916667,296.47081 c 5.55625003,0 -0.26458334,-5.29166 5.29166663,-5.29166" style="fill:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
        case "out":
            return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="m 0.52916667,296.47081 c 0,-4.23333 1.05833333,-5.29166 5.29166663,-5.29166" style="fill:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
        case "quad":
            return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="M 0.52916667,296.47081 C 3.175,296.47081 4.7625,293.03123 5.8208333,291.17915" style="fill:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
        case "quart":
            return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="m 0.52916667,296.47081 c 3.17500003,0 4.23333333,-2.64583 5.29166663,-5.29166" style="fill:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
        case "quint":
            return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="m 0.52916667,296.47081 c 3.43958333,0 4.23333333,-1.85208 5.29166663,-5.29166" style="fill:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
        case "sine":
            return '<svg width="24" height="24" viewBox="0 0 6.3499999 6.3500002"><g transform="translate(0,-290.64998)"><path d="m 0.52916667,296.47081 c 1.32291663,0 4.23333333,-3.43958 5.29166663,-5.29166" style="fill:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
        case "step":
            return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="m 0.52916667,296.47081 0,-1.32291 H 1.8520833 v -1.32292 H 3.175 v -1.32292 h 1.3229167 v -1.32291 l 1.3229166,1e-5" style="fill:none;stroke-width:0.52899998;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
        case "single_step":
            return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="M 0.5292 296.4708 L 5.8208 296.4708" style="fill:none;stroke-width:0.52916667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
        case "catmullrom":
            return '<svg width="24" height="14.089" viewBox="0 -2.5 18 10.567"><path d="M16.206 1.051c-0.129 0.074 -0.147 0.362 -0.037 0.473 0.043 0.043 0.129 0.074 0.203 0.074s0.16 -0.031 0.203 -0.074c0.117 -0.117 0.092 -0.405 -0.043 -0.479 -0.147 -0.074 -0.19 -0.074 -0.326 0.006m-0.639 0.7c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-0.43 0.491c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-0.369 0.553c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-0.491 0.491c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-0.43 0.491c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049M6.07 3.999c-0.16 0.086 -0.141 0.399 0.018 0.485 0.178 0.098 0.424 0.025 0.424 -0.123 0 -0.061 0.018 -0.129 0.049 -0.141 0.123 -0.074 1.032 0.203 2.132 0.639 0.749 0.301 1.456 0.541 1.812 0.614 0.319 0.068 0.584 0.129 0.584 0.135s0.031 0.068 0.068 0.135c0.141 0.258 0.516 0.129 0.516 -0.178 0 -0.27 -0.289 -0.375 -0.498 -0.184 -0.104 0.092 -0.166 0.086 -0.805 -0.086 -0.381 -0.104 -1.118 -0.35 -1.64 -0.559 -1.032 -0.405 -1.72 -0.62 -2.015 -0.62 -0.104 0 -0.221 -0.043 -0.264 -0.092 -0.086 -0.104 -0.227 -0.117 -0.381 -0.025m7.286 0.27c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-7.741 0.061c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-0.676 0.307c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m7.925 0.061c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-8.355 0.307c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m7.802 0.123c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-0.553 0.246c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-7.802 0.123c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-0.491 0.43c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-0.491 0.553c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049m-0.491 0.43c-0.025 0.055 -0.012 0.129 0.025 0.166 0.092 0.092 0.27 0.006 0.246 -0.117 -0.025 -0.141 -0.221 -0.178 -0.27 -0.049M1.72 7.501c-0.117 0.209 0.012 0.424 0.24 0.424 0.209 0 0.326 -0.154 0.295 -0.381 -0.018 -0.111 -0.068 -0.147 -0.246 -0.16 -0.172 -0.012 -0.233 0.006 -0.289 0.117"/></svg>';
        default: // linear
            return '<svg viewBox="0 0 6.3499999 6.3500002" height="24" width="24"><g transform="translate(0,-290.64998)"><path d="M 0.52916667,296.47081 5.8208333,291.17915" style="fill:none;stroke-width:0.52916667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></g></svg>';
    }
};


/***/ }),

/***/ "./ts/codec.ts":
/*!*********************!*\
  !*** ./ts/codec.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildDisplaySettingsJson: () => (/* binding */ buildDisplaySettingsJson),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   openProjectSettingsDialog: () => (/* binding */ openProjectSettingsDialog)
/* harmony export */ });
/* harmony import */ var _resources_armorTemplate_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/armorTemplate.json */ "./resources/armorTemplate.json");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./ts/utils.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./ts/constants.ts");



const codec = Codecs.bedrock;
// This gets automatically applied by Blockbench, we don't need to do anything with it
const format = new ModelFormat({
    id: _constants__WEBPACK_IMPORTED_MODULE_0__.GECKOLIB_MODEL_ID,
    name: "GeckoLib Animated Model",
    category: "minecraft",
    description: "Animated Model for Java mods using GeckoLib",
    icon: "view_in_ar",
    rotate_cubes: true,
    box_uv: true,
    optional_box_uv: true,
    single_texture: true,
    bone_rig: true,
    centered_grid: true,
    animated_textures: true,
    select_texture_for_particles: true,
    animation_files: true,
    locators: true,
    codec: Codecs.project,
    display_mode: false,
    animation_mode: true,
});
// Override the new project panel to allow customisation
format.new = function () {
    if (newProject(this))
        return openProjectSettingsDialog();
};
/**
 * Open a GeckoLib-customised project settings dialog (usually found when creating a new project, or via the File -> Project... menu item
 */
function openProjectSettingsDialog() {
    if (Project instanceof ModelProject)
        return createProjectSettingsDialog(Project, createProjectSettingsForm(Project));
}
/**
 * Internal function for determining the placeholder value for the <code>model_identifier</code> form element in dialog windows
 */
function getObjectIdPlaceholder(formResult) {
    const name = formResult === null || formResult === void 0 ? void 0 : formResult['name'];
    const modelType = formResult === null || formResult === void 0 ? void 0 : formResult[_constants__WEBPACK_IMPORTED_MODULE_0__.PROPERTY_MODEL_TYPE];
    if (!name && !modelType)
        return 'my_entity';
    const invalidPathChar = new RegExp('[^_\\-/.a-z0-9]+', 'g');
    const pseudoWhitepaceChar = new RegExp('[\\s&-]+', 'g');
    if (name)
        return name.toLowerCase().replace(pseudoWhitepaceChar, "_").replace(invalidPathChar, "");
    switch (_constants__WEBPACK_IMPORTED_MODULE_0__.GeckoModelType[modelType]) {
        case _constants__WEBPACK_IMPORTED_MODULE_0__.GeckoModelType.ENTITY: return 'my_entity';
        case _constants__WEBPACK_IMPORTED_MODULE_0__.GeckoModelType.BLOCK: return 'my_block';
        case _constants__WEBPACK_IMPORTED_MODULE_0__.GeckoModelType.ITEM: return 'my_item';
        case _constants__WEBPACK_IMPORTED_MODULE_0__.GeckoModelType.ARMOR: return 'my_armor';
        case _constants__WEBPACK_IMPORTED_MODULE_0__.GeckoModelType.OBJECT: return 'my_object';
        default: return 'my_entity';
    }
}
/**
 * Create the Project Settings dialog form for use in both new projects and editing existing ones
 */
function createProjectSettingsForm(Project) {
    const form = { format: { type: 'info', label: 'data.format', text: Format.name || 'unknown', description: Format.description } };
    const properties = ModelProject['properties'];
    const modelType = properties[_constants__WEBPACK_IMPORTED_MODULE_0__.PROPERTY_MODEL_TYPE];
    if (modelType) {
        form[_constants__WEBPACK_IMPORTED_MODULE_0__.PROPERTY_MODEL_TYPE] = {
            label: modelType.label,
            description: modelType.description,
            default: _constants__WEBPACK_IMPORTED_MODULE_0__.GeckoModelType.ENTITY.toUpperCase(),
            value: _constants__WEBPACK_IMPORTED_MODULE_0__.GeckoModelType[Project[_constants__WEBPACK_IMPORTED_MODULE_0__.PROPERTY_MODEL_TYPE].toUpperCase()].toUpperCase(),
            placeholder: modelType.placeholder,
            type: 'select',
            options: typeof modelType.options == 'function' ? modelType.options() : modelType.options,
        };
    }
    for (const key in properties) {
        const property = properties[key];
        if (property.exposed === false || !Condition(property.condition))
            continue;
        const entry = form[property.name] = {
            label: property.label,
            description: property.description,
            value: Project[property.name],
            placeholder: property.placeholder,
            type: property.type
        };
        if (property.name === 'name') {
            entry.label = 'Project Name';
            entry.placeholder = 'My Project';
            entry.description = 'The name of the Blockbench project';
        }
        else if (property.name === 'model_identifier') {
            entry.label = 'Object ID';
            entry.description = 'The registered id of the object this model represents, for exporting purposes';
            entry.placeholder = getObjectIdPlaceholder();
        }
        switch (property.type) {
            case 'boolean':
                entry.type = 'checkbox';
                break;
            case 'string':
                entry.type = 'text';
                break;
            default:
                if (property.options) {
                    entry['options'] = typeof property.options == 'function' ? property.options() : property.options;
                    entry.type = 'select';
                }
                break;
        }
    }
    if (form['name'] && (Project.save_path || Project.export_path || Format.image_editor) && !Format['legacy_editable_file_name'])
        delete form['name'];
    form['uv_mode'] = {
        label: 'dialog.project.default_uv_mode',
        description: 'dialog.project.default_uv_mode.description',
        type: 'select',
        condition: Format.optional_box_uv,
        options: {
            face_uv: 'dialog.project.uv_mode.face_uv',
            box_uv: 'dialog.project.uv_mode.box_uv',
        },
        value: Project.box_uv ? 'box_uv' : 'face_uv',
    };
    form['texture_size'] = {
        label: 'dialog.project.texture_size',
        type: 'vector',
        dimensions: 2,
        value: [Project.texture_width, Project.texture_height],
        min: 1
    };
    return form;
}
/**
 * Create the 'new project' popup dialogue for GeckoLib projects.
 * <p>
 * The contents of this is mostly a copy of <code>project.js</code> "project_window" action declaration (Copyright Blockbench)<br>
 * Periodically check this is up-to-date with Blockbench to ensure ongoing compatibility
 * @return false if the user clicks <code>cancel</code>, otherwise true
 */
function createProjectSettingsDialog(Project, form) {
    const dialog = new Dialog({
        id: 'project',
        title: 'dialog.project.title',
        width: 500,
        form,
        onConfirm: function (formResult) {
            let save;
            const box_uv = formResult['uv_mode'] == 'box_uv';
            const texture_width = Math.clamp(formResult['texture_size'][0], 1, Infinity);
            const texture_height = Math.clamp(formResult['texture_size'][1], 1, Infinity);
            if (Project.box_uv != box_uv || Project.texture_width != texture_width || Project.texture_height != texture_height) {
                // Adjust UV Mapping if resolution changed
                if (!Project.box_uv && !box_uv && !Format['per_texture_uv_size'] && (Project.texture_width != texture_width || Project.texture_height != texture_height)) {
                    save = Undo.initEdit({ elements: [...Cube.all, ...Mesh.all], uv_only: true, uv_mode: true });
                    Cube.all.forEach(cube => {
                        for (const key in cube.faces) {
                            const uv = cube.faces[key].uv;
                            uv[0] *= texture_width / Project.texture_width;
                            uv[2] *= texture_width / Project.texture_width;
                            uv[1] *= texture_height / Project.texture_height;
                            uv[3] *= texture_height / Project.texture_height;
                        }
                    });
                    Mesh.all.forEach(mesh => {
                        for (const key in mesh.faces) {
                            const uv = mesh.faces[key].uv;
                            for (const vkey in uv) {
                                uv[vkey][0] *= texture_width / Project.texture_width;
                                uv[vkey][1] *= texture_height / Project.texture_height;
                            }
                        }
                    });
                }
                // Convert UV mode per element
                if (Project.box_uv != box_uv && ((box_uv && !Cube.all.find(cube => cube['box_uv'])) || (!box_uv && !Cube.all.find(cube => !cube['box_uv'])))) {
                    if (!save)
                        save = Undo.initEdit({ elements: Cube.all, uv_only: true, uv_mode: true });
                    Cube.all.forEach(cube => cube.setUVMode(box_uv));
                }
                if (!save)
                    save = Undo.initEdit({ uv_mode: true });
                Project.texture_width = texture_width;
                Project.texture_height = texture_height;
                if (Format.optional_box_uv)
                    Project.box_uv = box_uv;
                Canvas.updateAllUVs();
                updateSelection();
            }
            const properties = ModelProject['properties'];
            for (const key in properties) {
                properties[key].merge(Project, formResult);
            }
            Project.name = Project.name.trim();
            Project.model_identifier = Project.model_identifier.trim();
            if (save)
                Undo.finishEdit('Change project UV settings');
            Blockbench.dispatchEvent('update_project_settings', formResult);
            BARS.updateConditions();
            if (Project.EditSession) {
                const metadata = {
                    texture_width: Project.texture_width,
                    texture_height: Project.texture_height,
                    box_uv: Project.box_uv
                };
                for (const key in properties) {
                    properties[key].copy(Project, metadata);
                }
                Project.EditSession.sendAll('change_project_meta', JSON.stringify(metadata));
            }
            const modelType = _constants__WEBPACK_IMPORTED_MODULE_0__.GeckoModelType[formResult[_constants__WEBPACK_IMPORTED_MODULE_0__.PROPERTY_MODEL_TYPE]];
            Project[_constants__WEBPACK_IMPORTED_MODULE_0__.PROPERTY_MODEL_TYPE] = modelType;
            if (modelType == _constants__WEBPACK_IMPORTED_MODULE_0__.GeckoModelType.ITEM)
                Project.parent = 'builtin/entity';
            if (Project.name === Format.name || Project.name === '')
                Project.name = "GeckoLib " + Project[_constants__WEBPACK_IMPORTED_MODULE_0__.PROPERTY_MODEL_TYPE];
            switch (modelType) {
                case _constants__WEBPACK_IMPORTED_MODULE_0__.GeckoModelType.ARMOR:
                    if (Outliner.root.length === 0) {
                        Codecs.project.parse(_resources_armorTemplate_json__WEBPACK_IMPORTED_MODULE_1__, null);
                    }
                    else {
                        alert('Unable to generate Armor Template over an existing model. Please select Armor on a new or empty project to use this model type.');
                        return false;
                    }
                    break;
                default:
                    break;
            }
            Format.display_mode = modelType === _constants__WEBPACK_IMPORTED_MODULE_0__.GeckoModelType.ITEM || settings[_constants__WEBPACK_IMPORTED_MODULE_0__.SETTING_ALWAYS_SHOW_DISPLAY].value;
            dialog.hide();
        },
        onFormChange(formResult) {
            try {
                document.getElementById('model_identifier')['placeholder'] = getObjectIdPlaceholder(formResult);
            } // eslint-disable-next-line no-empty
            catch (ex) { }
        },
    });
    dialog.show();
    return true;
}
/**
 * Export the item display json
 * <p>
 * Only called for GeckoLib projects
 */
function buildDisplaySettingsJson(options = {}) {
    if (!Project)
        return;
    const modelProperties = {};
    if (options['comment'] || settings.credit.value)
        modelProperties.credit = settings.credit.value;
    if (options['parent'] || Project.parent != '')
        modelProperties.parent = Project.parent;
    if (options['ambientocclusion'] || Project.ambientocclusion === false)
        modelProperties.ambientocclusion = false;
    if (Project.texture_width !== 16 || Project.texture_height !== 16)
        modelProperties.texture_size = [Project.texture_width, Project.texture_height];
    if (options['front_gui_light'] || Project.front_gui_light)
        modelProperties.gui_light = 'front';
    if (options['overrides'] || Project.overrides)
        modelProperties.overrides = Project.overrides;
    if (options['display'] || !(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(Project.display_settings)) {
        const nonDefaultDisplays = {};
        for (const slot in DisplayMode.slots) {
            const perspective = DisplayMode.slots[slot];
            // eslint-disable-next-line no-prototype-builtins
            if (DisplayMode.slots.hasOwnProperty(slot) && Project.display_settings[perspective]) {
                const display = Project.display_settings[perspective].export();
                if (display)
                    nonDefaultDisplays[perspective] = display;
            }
        }
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(nonDefaultDisplays))
            modelProperties.display = nonDefaultDisplays;
    }
    if (options['textures'] || !(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(Project.textures)) {
        for (const texture of Project.textures) {
            if (texture.particle || (settings[_constants__WEBPACK_IMPORTED_MODULE_0__.SETTING_AUTO_PARTICLE_TEXTURE].value && Object.keys(Project.textures).length === 1)) {
                let name = texture.name;
                if (name.indexOf(".png") > 0)
                    name = name.substring(0, name.indexOf(".png"));
                if (!texture.particle) {
                    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isValidPath)(name)) {
                        name = name.toLowerCase().replace(" ", "_");
                        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isValidPath)(name))
                            continue;
                    }
                }
                name = (Project[_constants__WEBPACK_IMPORTED_MODULE_0__.PROPERTY_MODEL_TYPE] == _constants__WEBPACK_IMPORTED_MODULE_0__.GeckoModelType.BLOCK ? "block/" : "item/") + name;
                if (Project[_constants__WEBPACK_IMPORTED_MODULE_0__.PROPERTY_MODID])
                    name = Project[_constants__WEBPACK_IMPORTED_MODULE_0__.PROPERTY_MODID] + ":" + name;
                modelProperties.textures = { 'particle': name };
                break;
            }
        }
    }
    Blockbench.export({
        resource_id: 'model',
        type: Codecs.java_block.name,
        extensions: ['json'],
        name: Project.model_identifier ? (Project.model_identifier + ".json") : codec.fileName().replace(".geo", ""),
        startpath: Project[_constants__WEBPACK_IMPORTED_MODULE_0__.PROPERTY_FILEPATH_CACHE].display,
        content: JSON.stringify(modelProperties, null, 2),
    }, file_path => {
        const oldPath = Project[_constants__WEBPACK_IMPORTED_MODULE_0__.PROPERTY_FILEPATH_CACHE].display;
        Project[_constants__WEBPACK_IMPORTED_MODULE_0__.PROPERTY_FILEPATH_CACHE].display = settings[_constants__WEBPACK_IMPORTED_MODULE_0__.SETTING_REMEMBER_EXPORT_LOCATIONS].value ? file_path : undefined;
        if (oldPath !== Project[_constants__WEBPACK_IMPORTED_MODULE_0__.PROPERTY_FILEPATH_CACHE].display)
            Project.saved = false;
    });
    return this;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (codec);


/***/ }),

/***/ "./ts/constants.ts":
/*!*************************!*\
  !*** ./ts/constants.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GECKOLIB_MODEL_ID: () => (/* binding */ GECKOLIB_MODEL_ID),
/* harmony export */   GeckoModelType: () => (/* binding */ GeckoModelType),
/* harmony export */   PROPERTY_FILEPATH_CACHE: () => (/* binding */ PROPERTY_FILEPATH_CACHE),
/* harmony export */   PROPERTY_MODEL_TYPE: () => (/* binding */ PROPERTY_MODEL_TYPE),
/* harmony export */   PROPERTY_MODID: () => (/* binding */ PROPERTY_MODID),
/* harmony export */   SETTING_ALWAYS_SHOW_DISPLAY: () => (/* binding */ SETTING_ALWAYS_SHOW_DISPLAY),
/* harmony export */   SETTING_AUTO_PARTICLE_TEXTURE: () => (/* binding */ SETTING_AUTO_PARTICLE_TEXTURE),
/* harmony export */   SETTING_CONVERT_BEDROCK_ANIMATIONS: () => (/* binding */ SETTING_CONVERT_BEDROCK_ANIMATIONS),
/* harmony export */   SETTING_DEFAULT_MODID: () => (/* binding */ SETTING_DEFAULT_MODID),
/* harmony export */   SETTING_REMEMBER_EXPORT_LOCATIONS: () => (/* binding */ SETTING_REMEMBER_EXPORT_LOCATIONS)
/* harmony export */ });
/**
 * GeckoLib plugin model format ID. Used to identify model types generated from this plugin
 */
const GECKOLIB_MODEL_ID = "animated_entity_model";
// Setting name constants
const SETTING_AUTO_PARTICLE_TEXTURE = 'geckolib_auto_particle_texture';
const SETTING_CONVERT_BEDROCK_ANIMATIONS = 'geckolib_convert_bedrock_animations';
const SETTING_ALWAYS_SHOW_DISPLAY = 'geckolib_always_show_display';
const SETTING_REMEMBER_EXPORT_LOCATIONS = 'geckolib_remember_export_locations';
const SETTING_DEFAULT_MODID = 'geckolib_default_modid';
// Property name constants
const PROPERTY_MODID = 'geckolib_modid';
const PROPERTY_MODEL_TYPE = 'geckolib_model_type';
const PROPERTY_FILEPATH_CACHE = 'geckolib_filepath_cache';
/**
 * Available GeckoLib model types
 */
var GeckoModelType;
(function (GeckoModelType) {
    GeckoModelType["ENTITY"] = "Entity";
    GeckoModelType["BLOCK"] = "Block";
    GeckoModelType["ITEM"] = "Item";
    GeckoModelType["ARMOR"] = "Armor";
    GeckoModelType["OBJECT"] = "Object";
})(GeckoModelType || (GeckoModelType = {}));


/***/ }),

/***/ "./ts/easing.ts":
/*!**********************!*\
  !*** ./ts/easing.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EASING_DEFAULT: () => (/* binding */ EASING_DEFAULT),
/* harmony export */   EASING_OPTIONS: () => (/* binding */ EASING_OPTIONS),
/* harmony export */   easingFunctions: () => (/* binding */ easingFunctions),
/* harmony export */   getEasingArgDefault: () => (/* binding */ getEasingArgDefault),
/* harmony export */   isArgsEasing: () => (/* binding */ isArgsEasing),
/* harmony export */   parseEasingArg: () => (/* binding */ parseEasingArg),
/* harmony export */   reverseEasing: () => (/* binding */ reverseEasing)
/* harmony export */ });
// The MIT license notice below applies to the function findIntervalBorderIndex
/* The MIT License (MIT)

Copyright (c) 2015 Boris Chumichev

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

/**
 *
 * Utilizes bisection method to search an interval to which
 * point belongs to, then returns an index of left or right
 * border of the interval
 *
 * @param {Number} point
 * @param {Array} intervals
 * @param {Boolean} useRightBorder
 * @returns {Number}
 */
function findIntervalBorderIndex(point, intervals, useRightBorder) {
    //If point is beyond given intervals
    if (point < intervals[0])
        return 0;
    if (point > intervals[intervals.length - 1])
        return intervals.length - 1;
    //If point is inside interval
    //Start searching on a full range of intervals
    let indexOfNumberToCompare = 0;
    let leftBorderIndex = 0;
    let rightBorderIndex = intervals.length - 1;
    //Reduce searching range till it find an interval point belongs to using binary search
    while (rightBorderIndex - leftBorderIndex !== 1) {
        indexOfNumberToCompare = leftBorderIndex + Math.floor((rightBorderIndex - leftBorderIndex) / 2);
        point >= intervals[indexOfNumberToCompare] ?
            leftBorderIndex = indexOfNumberToCompare :
            rightBorderIndex = indexOfNumberToCompare;
    }
    return useRightBorder ? rightBorderIndex : leftBorderIndex;
}
function stepRange(steps, stop = 1) {
    if (steps < 2)
        throw new Error("steps must be > 2, got:" + steps);
    const stepLength = stop / steps;
    return Array.from({ length: steps }, (_, i) => i * stepLength);
}
// The MIT license notice below applies to the Easing class
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class Easing {
    /**
     * A stepping function, returns 1 for any positive value of `n`.
     */
    static step0(n) {
        return n > 0 ? 1 : 0;
    }
    /**
     * A stepping function, returns 1 if `n` is greater than or equal to 1.
     */
    static step1(n) {
        return n >= 1 ? 1 : 0;
    }
    /**
     * A linear function, `f(t) = t`. Position correlates to elapsed time one to
     * one.
     *
     * http://cubic-bezier.com/#0,0,1,1
     */
    static linear(t) {
        return t;
    }
    /**
     * A simple inertial interaction, similar to an object slowly accelerating to
     * speed.
     *
     * http://cubic-bezier.com/#.42,0,1,1
     */
    // static ease(t) {
    //     if (!ease) {
    //         ease = Easing.bezier(0.42, 0, 1, 1);
    //     }
    //     return ease(t);
    // }
    /**
     * A quadratic function, `f(t) = t * t`. Position equals the square of elapsed
     * time.
     *
     * http://easings.net/#easeInQuad
     */
    static quad(t) {
        return t * t;
    }
    /**
     * A cubic function, `f(t) = t * t * t`. Position equals the cube of elapsed
     * time.
     *
     * http://easings.net/#easeInCubic
     */
    static cubic(t) {
        return t * t * t;
    }
    /**
     * A power function. Position is equal to the Nth power of elapsed time.
     *
     * n = 4: http://easings.net/#easeInQuart
     * n = 5: http://easings.net/#easeInQuint
     */
    static poly(n) {
        return (t) => Math.pow(t, n);
    }
    /**
     * A sinusoidal function.
     *
     * http://easings.net/#easeInSine
     */
    static sin(t) {
        return 1 - Math.cos((t * Math.PI) / 2);
    }
    /**
     * A circular function.
     *
     * http://easings.net/#easeInCirc
     */
    static circle(t) {
        return 1 - Math.sqrt(1 - t * t);
    }
    /**
     * An exponential function.
     *
     * http://easings.net/#easeInExpo
     */
    static exp(t) {
        return Math.pow(2, 10 * (t - 1));
    }
    /**
     * A simple elastic interaction, similar to a spring oscillating back and
     * forth.
     *
     * Default bounciness is 1, which overshoots a little bit once. 0 bounciness
     * doesn't overshoot at all, and bounciness of N > 1 will overshoot about N
     * times.
     *
     * http://easings.net/#easeInElastic
     */
    static elastic(bounciness = 1) {
        const p = bounciness * Math.PI;
        return (t) => 1 - Math.pow(Math.cos((t * Math.PI) / 2), 3) * Math.cos(t * p);
    }
    /**
     * Use with `Animated.parallel()` to create a simple effect where the object
     * animates back slightly as the animation starts.
     *
     * Wolfram Plot:
     *
     * - http://tiny.cc/back_default (s = 1.70158, default)
     */
    static back(s = 1.70158) {
        return (t) => t * t * ((s + 1) * t - s);
    }
    /**
     * Provides a simple bouncing effect.
     *
     * Props to Waterded#6455 for making the bounce adjustable and GiantLuigi4#6616 for helping clean it up
     * using min instead of ternaries
     * http://easings.net/#easeInBounce
     */
    static bounce(k = 0.5) {
        const q = (x) => (121 / 16) * x * x;
        const w = (x) => ((121 / 4) * k) * Math.pow(x - (6 / 11), 2) + 1 - k;
        const r = (x) => 121 * k * k * Math.pow(x - (9 / 11), 2) + 1 - k * k;
        const t = (x) => 484 * k * k * k * Math.pow(x - (10.5 / 11), 2) + 1 - k * k * k;
        return (x) => Math.min(q(x), w(x), r(x), t(x));
    }
    /**
     * Provides a cubic bezier curve, equivalent to CSS Transitions'
     * `transition-timing-function`.
     *
     * A useful tool to visualize cubic bezier curves can be found at
     * http://cubic-bezier.com/
     */
    // static bezier(x1, y1, x2, y2) {
    //     const _bezier = require('./bezier');
    //     return _bezier(x1, y1, x2, y2);
    // }
    /**
     * Runs an easing function forwards.
     */
    static in(easing) {
        return easing;
    }
    /**
     * Runs an easing function backwards.
     */
    static out(easing) {
        return (t) => 1 - easing(1 - t);
    }
    /**
     * Makes any easing function symmetrical. The easing function will run
     * forwards for half of the duration, then backwards for the rest of the
     * duration.
     */
    static inOut(easing) {
        return (t) => {
            if (t < 0.5) {
                return easing(t * 2) / 2;
            }
            return 1 - easing((1 - t) * 2) / 2;
        };
    }
    /**
     * No easing, just snaps to the next keyframe when it's timestamp is reached.
     */
    static singleStep(t) {
        return t === 1 ? 1 : 0;
    }
    static catmullRom(n1, n2, n3, n4, t) {
        return 0.5 * (2.0 * n2 + (n3 - n1) * t +
            (2.0 * n1 - 5.0 * n2 + 4.0 * n3 - n4) * t * t +
            (3.0 * n2 - n1 - 3.0 * n3 + n4) * t * t * t);
    }
}
const quart = Easing.poly(4);
const quint = Easing.poly(5);
const back = (direction, scalar, t) => direction(Easing.back(1.70158 * scalar))(t);
const elastic = (direction, bounciness, t) => direction(Easing.elastic(bounciness))(t);
const bounce = (direction, bounciness, t) => direction(Easing.bounce(bounciness))(t);
const easingFunctions = {
    linear: Easing.linear,
    step(steps, x) {
        const intervals = stepRange(steps);
        return intervals[findIntervalBorderIndex(x, intervals, false)];
    },
    easeInQuad: Easing.in(Easing.quad),
    easeOutQuad: Easing.out(Easing.quad),
    easeInOutQuad: Easing.inOut(Easing.quad),
    easeInCubic: Easing.in(Easing.cubic),
    easeOutCubic: Easing.out(Easing.cubic),
    easeInOutCubic: Easing.inOut(Easing.cubic),
    easeInQuart: Easing.in(quart),
    easeOutQuart: Easing.out(quart),
    easeInOutQuart: Easing.inOut(quart),
    easeInQuint: Easing.in(quint),
    easeOutQuint: Easing.out(quint),
    easeInOutQuint: Easing.inOut(quint),
    easeInSine: Easing.in(Easing.sin),
    easeOutSine: Easing.out(Easing.sin),
    easeInOutSine: Easing.inOut(Easing.sin),
    easeInExpo: Easing.in(Easing.exp),
    easeOutExpo: Easing.out(Easing.exp),
    easeInOutExpo: Easing.inOut(Easing.exp),
    easeInCirc: Easing.in(Easing.circle),
    easeOutCirc: Easing.out(Easing.circle),
    easeInOutCirc: Easing.inOut(Easing.circle),
    easeInBack: back.bind(null, Easing.in),
    easeOutBack: back.bind(null, Easing.out),
    easeInOutBack: back.bind(null, Easing.inOut),
    easeInElastic: elastic.bind(null, Easing.in),
    easeOutElastic: elastic.bind(null, Easing.out),
    easeInOutElastic: elastic.bind(null, Easing.inOut),
    easeInBounce: bounce.bind(null, Easing.in),
    easeOutBounce: bounce.bind(null, Easing.out),
    easeInOutBounce: bounce.bind(null, Easing.inOut),
    single_step: Easing.singleStep,
    catmullrom: Easing.catmullRom,
};
// Object with the same keys as easingFunctions and values of the stringified key names
const EASING_OPTIONS = Object.freeze(Object.fromEntries(Object.entries(easingFunctions).map(entry => ([entry[0], entry[0]]))));
const EASING_DEFAULT = 'linear';
const getEasingArgDefault = (kf) => {
    switch (kf.easing) {
        case EASING_OPTIONS.easeInBack:
        case EASING_OPTIONS.easeOutBack:
        case EASING_OPTIONS.easeInOutBack:
        case EASING_OPTIONS.easeInElastic:
        case EASING_OPTIONS.easeOutElastic:
        case EASING_OPTIONS.easeInOutElastic:
            return 1;
        case EASING_OPTIONS.easeInBounce:
        case EASING_OPTIONS.easeOutBounce:
        case EASING_OPTIONS.easeInOutBounce:
            return 0.5;
        case EASING_OPTIONS.step:
            return 5;
        default:
            return null;
    }
};
const parseEasingArg = (kf, value) => {
    switch (kf.easing) {
        case EASING_OPTIONS.easeInBack:
        case EASING_OPTIONS.easeOutBack:
        case EASING_OPTIONS.easeInOutBack:
        case EASING_OPTIONS.easeInElastic:
        case EASING_OPTIONS.easeOutElastic:
        case EASING_OPTIONS.easeInOutElastic:
        case EASING_OPTIONS.easeInBounce:
        case EASING_OPTIONS.easeOutBounce:
        case EASING_OPTIONS.easeInOutBounce:
            return parseFloat(value);
        case EASING_OPTIONS.step:
            return Math.max(parseInt(value, 10), 2);
        default:
            return parseInt(value, 10);
    }
};
function reverseEasing(easing) {
    if (!easing)
        return easing;
    if (easing.startsWith("easeInOut"))
        return easing;
    if (easing.startsWith("easeIn"))
        return easing.replace("easeIn", "easeOut");
    if (easing.startsWith("easeOut"))
        return easing.replace("easeOut", "easeIn");
    return easing;
}
const isArgsEasing = (easing = "") => easing.includes("Back") ||
    easing.includes("Elastic") ||
    easing.includes("Bounce") ||
    easing === EASING_OPTIONS.step;


/***/ }),

/***/ "./ts/events.ts":
/*!**********************!*\
  !*** ./ts/events.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventListeners: () => (/* binding */ addEventListeners),
/* harmony export */   removeEventListeners: () => (/* binding */ removeEventListeners)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./ts/utils.ts");
/* harmony import */ var _keyframe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyframe */ "./ts/keyframe.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./ts/constants.ts");
/* harmony import */ var _codec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./codec */ "./ts/codec.ts");




function addEventListeners() {
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addCodecCallback)(Codecs.project, 'parse', (0,_utils__WEBPACK_IMPORTED_MODULE_0__.onlyIfGeckoLib)(onProjectParse));
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addCodecCallback)(Codecs.bedrock, 'compile', (0,_utils__WEBPACK_IMPORTED_MODULE_0__.onlyIfGeckoLib)(onBedrockCompile));
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addEventListener)('select_mode', (0,_utils__WEBPACK_IMPORTED_MODULE_0__.onlyIfGeckoLib)(onModeSelect));
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addEventListener)('select_project', (0,_utils__WEBPACK_IMPORTED_MODULE_0__.onlyIfGeckoLib)(onProjectSelect));
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addEventListener)('update_project_settings', (0,_utils__WEBPACK_IMPORTED_MODULE_0__.onlyIfGeckoLib)(onSettingsChanged));
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addEventListener)('save_project', (0,_utils__WEBPACK_IMPORTED_MODULE_0__.onlyIfGeckoLib)(onProjectSave));
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addMonkeypatch)(Animator, null, "buildFile", monkeypatchAnimatorBuildFile);
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addMonkeypatch)(Animator, null, "loadFile", monkeypatchAnimatorLoadFile);
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addMonkeypatch)(Blockbench, null, "export", monkeypatchBlockbenchExport);
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addMonkeypatch)(BarItems, 'project_window', "click", monkeypatchProjectWindowClick);
}
function removeEventListeners() {
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.removeCodecCallback)(Codecs.project, 'parse', (0,_utils__WEBPACK_IMPORTED_MODULE_0__.onlyIfGeckoLib)(onProjectParse));
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.removeCodecCallback)(Codecs.bedrock, 'compile', (0,_utils__WEBPACK_IMPORTED_MODULE_0__.onlyIfGeckoLib)(onBedrockCompile));
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.removeEventListener)('select_mode', (0,_utils__WEBPACK_IMPORTED_MODULE_0__.onlyIfGeckoLib)(onModeSelect));
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.removeEventListener)('select_project', (0,_utils__WEBPACK_IMPORTED_MODULE_0__.onlyIfGeckoLib)(onProjectSelect));
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.removeEventListener)('update_project_settings', (0,_utils__WEBPACK_IMPORTED_MODULE_0__.onlyIfGeckoLib)(onSettingsChanged));
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.removeMonkeypatches)();
}
/**
 * When an existing GeckoLib project is being read from file
 */
function onProjectParse(e) {
    onSettingsChanged();
    // Because the project hasn't had its model properties applied at this stage
    Format.display_mode = (e.model[_constants__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_MODEL_TYPE] && e.model[_constants__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_MODEL_TYPE] === _constants__WEBPACK_IMPORTED_MODULE_1__.GeckoModelType.ITEM) || settings[_constants__WEBPACK_IMPORTED_MODULE_1__.SETTING_ALWAYS_SHOW_DISPLAY].value;
}
/**
 * When the Blockbench project is being saved
 * <p>
 * Only called for GeckoLib projects
 */
function onProjectSave(e) {
    if (!settings[_constants__WEBPACK_IMPORTED_MODULE_1__.SETTING_REMEMBER_EXPORT_LOCATIONS].value)
        e.model[_constants__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_FILEPATH_CACHE] = {};
}
/**
 * When the GeckoLib project settings are changed, or a GeckoLib project is being opened or swapped to
 * <p>
 * Only called for GeckoLib projects
 */
function onSettingsChanged() {
    Modes.selected.select();
    Format.display_mode = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.hasModelDisplaySettings)();
    if (Project instanceof ModelProject && Project[_constants__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_MODEL_TYPE] === _constants__WEBPACK_IMPORTED_MODULE_1__.GeckoModelType.ITEM && (!Project.parent || Project.parent !== 'builtin/entity')) {
        Project.parent = 'builtin/entity';
        Project.saved = false;
    }
}
/**
 * When opening a project tab, whether from an existing project, creating a new one, or swapping open tabs
 * <p>
 * Only called for GeckoLib projects
 */
function onProjectSelect() {
    onSettingsChanged();
}
/**
 * When selecting edit/paint/display/animate/etc
 * <p>
 * Only called for GeckoLib projects
 */
function onModeSelect(e) {
    // Offset the display emulator to account for GeckoLib's +0.51 manual offset
    // This is a legacy patch as Blockbench no longer does this internally
    if (e.mode.id == 'display')
        Project.model_3d.position.y = 0;
}
/**
 * When the model geometry is being compiled for export
 * <p>
 * Only called for GeckoLib projects
 */
function onBedrockCompile(e) {
    var _a;
    // Remove display transforms from non-bedrock geometry
    (_a = e.model["minecraft:geometry"]) === null || _a === void 0 ? void 0 : _a.forEach((geo) => delete geo["item_display_transforms"]);
    // Force-suppress specific version advancement for non-bedrock models to prevent legacy version crashes until a better system is established
    switch (e.model.format_version) {
        case "1.14.0":
        case "1.21.0":
        case "1.21.20":
            e.model.format_version = "1.12.0";
            break;
        default:
            break;
    }
}
/**
 * When the project settings window is being opened, either via a new project or the File -> Project... menu item
 * <p>
 * The project <b><u>may not</u></b> be a GeckoLib project, so check it as necessary
 */
function monkeypatchProjectWindowClick() {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isGeckoLibModel)()) {
        (0,_codec__WEBPACK_IMPORTED_MODULE_2__.openProjectSettingsDialog)();
    }
    else {
        _utils__WEBPACK_IMPORTED_MODULE_0__.Monkeypatches.get(BarItems).click();
    }
}
/**
 * When any file is being exported to disk by Blockbench
 * <p>
 * The project <b><u>may not</u></b> be a GeckoLib project, so check it as necessary
 */
function monkeypatchBlockbenchExport(options, cb) {
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isGeckoLibModel)()) {
        _utils__WEBPACK_IMPORTED_MODULE_0__.Monkeypatches.get(Blockbench).export(options, cb);
        return;
    }
    if (Project instanceof ModelProject) {
        if (options.resource_id === 'animation' && options.type === 'JSON Animation') { // Animation JSON
            const fileName = Project.model_identifier && Project.model_identifier + ".animation";
            options.startpath = Project[_constants__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_FILEPATH_CACHE].animation;
            const parentCallback = cb;
            cb = file_path => {
                if (parentCallback)
                    parentCallback(file_path);
                const oldPath = Project[_constants__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_FILEPATH_CACHE].animation;
                Project[_constants__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_FILEPATH_CACHE].animation = settings[_constants__WEBPACK_IMPORTED_MODULE_1__.SETTING_REMEMBER_EXPORT_LOCATIONS].value ? file_path : undefined;
                if (oldPath !== Project[_constants__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_FILEPATH_CACHE].animation)
                    Project.saved = false;
            };
            if (fileName)
                options.name = fileName;
        }
        else if (options.resource_id === 'model' && options.type === 'Bedrock Model') { // Geo
            const fileName = Project.model_identifier && Project.model_identifier + ".geo";
            options.startpath = Project[_constants__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_FILEPATH_CACHE].model;
            const parentWriter = options.custom_writer;
            const parentCallback = cb;
            if (parentWriter) {
                options.custom_writer = (content, filePath, callback) => {
                    parentWriter(content, filePath, callback);
                    callback(filePath);
                };
            }
            cb = file_path => {
                if (parentCallback)
                    parentCallback(file_path);
                const oldPath = Project[_constants__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_FILEPATH_CACHE].model;
                Project[_constants__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_FILEPATH_CACHE].model = settings[_constants__WEBPACK_IMPORTED_MODULE_1__.SETTING_REMEMBER_EXPORT_LOCATIONS].value ? file_path : undefined;
                if (oldPath !== Project[_constants__WEBPACK_IMPORTED_MODULE_1__.PROPERTY_FILEPATH_CACHE].model)
                    Project.saved = false;
            };
            if (fileName)
                options.name = fileName;
        }
    }
    _utils__WEBPACK_IMPORTED_MODULE_0__.Monkeypatches.get(Blockbench).export(options, cb);
}
/**
 * When the animation file is being loaded into the project
 * <p>
 * The project <b><u>may not</u></b> be a GeckoLib project, so check it as necessary
 */
function monkeypatchAnimatorLoadFile(file, exportingAnims) {
    // eslint-disable-next-line no-undef
    const json = file.json || autoParseJSON(file.content);
    const path = file.path;
    const new_animations = [];
    function geoLoopToBbLoop(jsonLoop) {
        if (jsonLoop) {
            if (typeof jsonLoop === 'boolean')
                return jsonLoop ? 'loop' : 'once';
            if (typeof jsonLoop === 'string') {
                if (jsonLoop === "hold_on_last_frame")
                    return 'hold';
                if (jsonLoop === "loop" || jsonLoop === "true")
                    return 'loop';
            }
        }
        return 'once';
    }
    function getKeyframeDataPoints(source) {
        if (source instanceof Array)
            return [{ x: source[0], y: source[1], z: source[2], }];
        if (['number', 'string'].includes(typeof source))
            return [{ x: source, y: source, z: source }];
        if (typeof source == 'object') {
            if (source.vector)
                return getKeyframeDataPoints(source.vector);
            const points = [];
            if (source.pre)
                points.push(getKeyframeDataPoints(source.pre)[0]);
            if (source.post)
                points.push(getKeyframeDataPoints(source.post)[0]);
            return points;
        }
    }
    if (json && typeof json.animations === 'object') {
        for (const animName in json.animations) {
            if (exportingAnims && !exportingAnims.includes(animName))
                continue;
            //Animation
            const animData = json.animations[animName];
            const animation = new Blockbench.Animation({
                name: animName,
                path,
                loop: geoLoopToBbLoop(animData.loop),
                override: animData.override_previous_animation,
                anim_time_update: (typeof animData.anim_time_update == 'string'
                    ? animData.anim_time_update.replace(/;(?!$)/, ';\n')
                    : animData.anim_time_update),
                blend_weight: (typeof animData.blend_weight == 'string'
                    ? animData.blend_weight.replace(/;(?!$)/, ';\n')
                    : animData.blend_weight),
                length: animData.animation_length
            }).add();
            //Bones
            if (animData.bones) {
                for (const boneName in animData.bones) {
                    const bone = animData.bones[boneName];
                    const lowercase_bone_name = boneName.toLowerCase();
                    const group = Group.all.find(group => group.name.toLowerCase() == lowercase_bone_name);
                    const uuid = group ? group.uuid : guid();
                    let ga; // eslint-disable-line @typescript-eslint/no-unused-vars
                    const boneAnimator = new _keyframe__WEBPACK_IMPORTED_MODULE_3__.GeckolibBoneAnimator(uuid, animation, boneName);
                    animation.animators[uuid] = boneAnimator;
                    //Channels
                    for (const channel in bone) {
                        if (Animator.possible_channels[channel]) {
                            if (typeof bone[channel] === 'string' || typeof bone[channel] === 'number' || bone[channel] instanceof Array) {
                                boneAnimator.addKeyframe({
                                    time: 0,
                                    channel,
                                    easing: bone[channel].easing,
                                    easingArgs: bone[channel].easingArgs,
                                    data_points: getKeyframeDataPoints(bone[channel]),
                                });
                            }
                            else if (typeof bone[channel] === 'object' && bone[channel].post) {
                                boneAnimator.addKeyframe({
                                    time: 0,
                                    channel,
                                    easing: bone[channel].easing,
                                    easingArgs: bone[channel].easingArgs,
                                    interpolation: bone[channel].lerp_mode,
                                    data_points: getKeyframeDataPoints(bone[channel]),
                                });
                            }
                            else if (typeof bone[channel] === 'object') {
                                for (const timestamp in bone[channel]) {
                                    boneAnimator.addKeyframe({
                                        time: parseFloat(timestamp),
                                        channel,
                                        easing: bone[channel][timestamp].easing,
                                        easingArgs: bone[channel][timestamp].easingArgs,
                                        interpolation: bone[channel][timestamp].lerp_mode,
                                        data_points: getKeyframeDataPoints(bone[channel][timestamp]),
                                    });
                                }
                            }
                        }
                    }
                }
            }
            if (animData.sound_effects) {
                if (!animation.animators.effects)
                    animation.animators.effects = new EffectAnimator(animation);
                for (const timestamp in animData.sound_effects) {
                    const sounds = animData.sound_effects[timestamp];
                    animation.animators.effects.addKeyframe({
                        channel: 'sound',
                        time: parseFloat(timestamp),
                        data_points: sounds instanceof Array ? sounds : [sounds]
                    });
                }
            }
            if (animData.particle_effects) {
                if (!animation.animators.effects)
                    animation.animators.effects = new EffectAnimator(animation);
                for (const timestamp in animData.particle_effects) {
                    let particles = animData.particle_effects[timestamp];
                    if (!(particles instanceof Array))
                        particles = [particles];
                    particles.forEach(particle => {
                        if (particle)
                            particle.script = particle.pre_effect_script;
                    });
                    animation.animators.effects.addKeyframe({
                        channel: 'particle',
                        time: parseFloat(timestamp),
                        data_points: particles
                    });
                }
            }
            if (animData.timeline) {
                if (!animation.animators.effects)
                    animation.animators.effects = new EffectAnimator(animation);
                for (const timestamp in animData.timeline) {
                    const entry = animData.timeline[timestamp];
                    const script = entry instanceof Array ? entry.join('\n') : entry;
                    animation.animators.effects.addKeyframe({
                        channel: 'timeline',
                        time: parseFloat(timestamp),
                        data_points: [{ script }]
                    });
                }
            }
            animation.calculateSnappingFromKeyframes();
            if (!Blockbench.Animation.selected && Animator.open)
                animation.select();
            new_animations.push(animation);
        }
    }
    return new_animations;
}
/**
 * When the animations json is being compiled for export
 * <p>
 * The project <b><u>may not</u></b> be a GeckoLib project, so check it as necessary
 */
function monkeypatchAnimatorBuildFile() {
    const result = _utils__WEBPACK_IMPORTED_MODULE_0__.Monkeypatches.get(Animator).buildFile.apply(this, arguments);
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isGeckoLibModel)()) {
        result.geckolib_format_version = 2;
        // Convert exported bedrock animations to non-bedrock
        // Only applies to projects that had its animations made in a non-GeckoLib model format
        if (settings[_constants__WEBPACK_IMPORTED_MODULE_1__.SETTING_CONVERT_BEDROCK_ANIMATIONS].value && result.animations) {
            for (const animation in result.animations) {
                const bones = result.animations[animation].bones;
                if (bones) {
                    for (const boneName in bones) {
                        const bone = bones[boneName];
                        for (const animationGroupType in bone) {
                            const animationGroup = bone[animationGroupType];
                            for (const timestamp in animationGroup) {
                                const keyframe = animationGroup[timestamp];
                                if (!keyframe)
                                    continue;
                                let bedrockKeyframe = keyframe.pre;
                                let bedrockKeyframeData = undefined;
                                if (bedrockKeyframe !== undefined) {
                                    bedrockKeyframeData = bedrockKeyframe;
                                    delete keyframe.pre;
                                }
                                bedrockKeyframe = keyframe.post;
                                if (bedrockKeyframe !== undefined) {
                                    bedrockKeyframeData = bedrockKeyframe;
                                    delete keyframe.post;
                                }
                                if (bedrockKeyframeData !== undefined) {
                                    Object.assign(keyframe, bedrockKeyframeData);
                                    if (keyframe.lerp_mode)
                                        delete keyframe.lerp_mode;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return result;
}


/***/ }),

/***/ "./ts/keyframe.ts":
/*!************************!*\
  !*** ./ts/keyframe.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeckolibBoneAnimator: () => (/* binding */ GeckolibBoneAnimator),
/* harmony export */   loadKeyframeOverrides: () => (/* binding */ loadKeyframeOverrides),
/* harmony export */   unloadKeyframeOverrides: () => (/* binding */ unloadKeyframeOverrides)
/* harmony export */ });
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/groupBy */ "./node_modules/lodash/groupBy.js");
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/mapValues */ "./node_modules/lodash/mapValues.js");
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./ts/utils.ts");
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./easing */ "./ts/easing.ts");




var Keyframe = Blockbench.Keyframe;
function loadKeyframeOverrides() {
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.addMonkeypatch)(Keyframe, "prototype", "getLerp", keyframeGetLerp);
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.addMonkeypatch)(Keyframe, "prototype", "compileBedrockKeyframe", keyframeCompileBedrock);
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.addMonkeypatch)(Keyframe, "prototype", "getUndoCopy", keyframeGetUndoCopy);
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.addMonkeypatch)(Keyframe, "prototype", "extend", keyframeExtend);
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.addMonkeypatch)(BarItems.reverse_keyframes, null, "click", onReverseKeyframes);
}
function unloadKeyframeOverrides() {
    //No-op for now since monkeypatches are unloaded automatically
}
// This subclass isn't strictly needed at runtime but was required to appease the compiler due to our monkeypatch
class GeckolibBoneAnimator extends BoneAnimator {
    addKeyframe(data, uuid) {
        return super.addKeyframe(data, uuid);
    }
}
function lerp(start, stop, amt) {
    return amt * (stop - start) + start;
}
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
function keyframeGetLerp(other, axis, amount, allow_expression) {
    const easing = other.easing || _easing__WEBPACK_IMPORTED_MODULE_3__.EASING_DEFAULT;
    if (Format.id !== "animated_entity_model") {
        return _utils__WEBPACK_IMPORTED_MODULE_2__.Monkeypatches.get(Keyframe).getLerp.apply(this, arguments);
    }
    const start = this.calc(axis);
    const stop = other.calc(axis);
    let easingFunc = _easing__WEBPACK_IMPORTED_MODULE_3__.easingFunctions[easing];
    if (easing === "catmullrom") {
        const sorted = this.animator[this.channel].slice().sort((kf1, kf2) => (kf1.time - kf2.time));
        const before_index = sorted.indexOf(this);
        const before_plus = sorted[before_index - 1];
        const after_plus = sorted[before_index + 2];
        const before_plus_value = typeof before_plus === 'undefined' || before_plus === null ? start : before_plus.calc(axis);
        const after_plus_value = typeof after_plus === 'undefined' || after_plus === null ? stop : after_plus.calc(axis);
        return easingFunc(before_plus_value, start, stop, after_plus_value, amount);
    }
    else if ((0,_easing__WEBPACK_IMPORTED_MODULE_3__.isArgsEasing)(easing)) {
        const arg1 = Array.isArray(other.easingArgs) && other.easingArgs.length > 0
            ? other.easingArgs[0]
            : (0,_easing__WEBPACK_IMPORTED_MODULE_3__.getEasingArgDefault)(other);
        // console.log(`keyframeGetLerp arg1: ${arg1}`);
        easingFunc = easingFunc.bind(null, arg1);
    }
    const easedAmount = easingFunc(amount);
    const result = lerp(start, stop, easedAmount);
    // console.log('keyframeGetLerp easing:', easing, 'arguments:', arguments, 'start:', start, 'stop:', stop, 'amount:', amount, 'easedAmount:', easedAmount, 'result:', result);
    if (Number.isNaN(result)) {
        throw new Error('batman');
    }
    return result;
}
function geckolibGetArray(data_point = 0) {
    const { easing, easingArgs, getArray } = this;
    let result = getArray.apply(this, [data_point]);
    if (Format.id === "animated_entity_model") {
        result = { vector: result, easing };
        if ((0,_easing__WEBPACK_IMPORTED_MODULE_3__.isArgsEasing)(easing))
            result.easingArgs = easingArgs;
    }
    return result;
}
function keyframeCompileBedrock() {
    if (Format.id !== "animated_entity_model" || !this.transform) {
        return _utils__WEBPACK_IMPORTED_MODULE_2__.Monkeypatches.get(Keyframe).compileBedrockKeyframe.apply(this, arguments);
    }
    if (this.interpolation == 'catmullrom') {
        const previous = this.getPreviousKeyframe.apply(this);
        const include_pre = (!previous && this.time > 0) || (previous && previous.interpolation != 'catmullrom');
        return {
            pre: include_pre ? geckolibGetArray.call(this, [0]) : undefined,
            post: geckolibGetArray.call(this, [include_pre ? 1 : 0]),
            lerp_mode: this.interpolation,
        };
    }
    else if (this.data_points.length == 1) {
        const previous = this.getPreviousKeyframe.apply(this);
        if (previous && previous.interpolation == 'step') {
            return new oneLiner({
                pre: geckolibGetArray.call(previous, [1]),
                post: geckolibGetArray.call(this),
            });
        }
        else {
            return geckolibGetArray.call(this);
        }
    }
    else {
        return new oneLiner({
            pre: geckolibGetArray.call(this, [0]),
            post: geckolibGetArray.call(this, [1]),
        });
    }
}
function keyframeGetUndoCopy() {
    const { easing, easingArgs } = this;
    const result = _utils__WEBPACK_IMPORTED_MODULE_2__.Monkeypatches.get(Keyframe).getUndoCopy.apply(this, arguments);
    if (Format.id === "animated_entity_model") {
        Object.assign(result, { easing });
        if ((0,_easing__WEBPACK_IMPORTED_MODULE_3__.isArgsEasing)(easing))
            result.easingArgs = easingArgs;
    }
    //   console.log('keyframeGetUndoCopy arguments:', arguments, 'this:', this, 'result:', result);
    return result;
}
function keyframeExtend(dataIn) {
    const data = Object.assign({}, dataIn);
    //   console.log('keyframeExtend 1 arguments:', arguments);
    if (Format.id === "animated_entity_model") {
        if (typeof data.values === 'object') {
            if (data.values.easing !== undefined) {
                Merge.string(this, data.values, 'easing');
            }
            if (Array.isArray(data.values.easingArgs)) {
                this.easingArgs = data.values.easingArgs;
            }
            if (!Array.isArray(data.values) && Array.isArray(data.values.vector)) {
                // Convert data to format expected by KeyframeExtendOriginal
                data.values = data.values.vector;
            }
        }
        else {
            if (data.easing !== undefined) {
                Merge.string(this, data, 'easing');
            }
            if (Array.isArray(data.easingArgs)) {
                this.easingArgs = data.easingArgs;
            }
        }
    }
    const result = _utils__WEBPACK_IMPORTED_MODULE_2__.Monkeypatches.get(Keyframe).extend.apply(this, arguments);
    //   console.log('keyframeExtend 2 arguments:', arguments, 'this:', this, 'result:', result);
    return result;
}
function onReverseKeyframes() {
    _utils__WEBPACK_IMPORTED_MODULE_2__.Monkeypatches.get(BarItems.reverse_keyframes).click.apply(this, arguments);
    // console.log('@@@ onReverseKeyframes selected:', Timeline.selected);
    // There's not really an easy way to merge our undo operation with the original one so we'll make a new one instead
    Undo.initEdit({ keyframes: Timeline.selected });
    const kfByAnimator = lodash_groupBy__WEBPACK_IMPORTED_MODULE_0___default()(Timeline.selected, kf => kf.animator.uuid);
    const kfByAnimatorAndChannel = lodash_mapValues__WEBPACK_IMPORTED_MODULE_1___default()(kfByAnimator, keyframesForAnimator => lodash_groupBy__WEBPACK_IMPORTED_MODULE_0___default()(keyframesForAnimator, kf => kf.channel));
    Object.keys(kfByAnimatorAndChannel).forEach(animatorUuid => {
        const animatorChannelGroups = kfByAnimatorAndChannel[animatorUuid];
        Object.keys(animatorChannelGroups).forEach(channel => {
            const channelKeyframes = animatorChannelGroups[channel];
            // Ensure keyframes are in temporal order. Not sure if this is already the case, but it couldn't hurt
            channelKeyframes.sort((kfA, kfB) => kfA.time - kfB.time);
            // Reverse easing direction
            const easingData = channelKeyframes.map((kf) => ({
                easing: (0,_easing__WEBPACK_IMPORTED_MODULE_3__.reverseEasing)(kf.easing),
                easingArgs: kf.easingArgs
            }));
            // console.log('@@@ onReverseKeyframes PRE animator:', animatorUuid, 'channel:', channel, 'channelKeyframes:', channelKeyframes, 'easingData:', easingData);
            // Shift easing data to the right by one keyframe
            channelKeyframes.forEach((kf, i) => {
                if (i == 0) {
                    kf.easing = undefined;
                    kf.easingArgs = undefined;
                    return;
                }
                const newEasingData = easingData[i - 1];
                kf.easing = newEasingData.easing;
                kf.easingArgs = newEasingData.easingArgs;
            });
            // console.log('@@@ onReverseKeyframes POST animator:', animatorUuid, 'channel:', channel, 'channelKeyframes:', channelKeyframes);
        });
    });
    // console.log('@@@ kfByAnimator:', kfByAnimator, "\nkfByAnimatorAndChannel:", kfByAnimatorAndChannel);
    Undo.finishEdit('Reverse keyframe easing');
    updateKeyframeSelection();
    Animator.preview();
}


/***/ }),

/***/ "./ts/utils.ts":
/*!*********************!*\
  !*** ./ts/utils.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Monkeypatches: () => (/* binding */ Monkeypatches),
/* harmony export */   addCodecCallback: () => (/* binding */ addCodecCallback),
/* harmony export */   addEventListener: () => (/* binding */ addEventListener),
/* harmony export */   addMonkeypatch: () => (/* binding */ addMonkeypatch),
/* harmony export */   hasModelDisplaySettings: () => (/* binding */ hasModelDisplaySettings),
/* harmony export */   isEmpty: () => (/* binding */ isEmpty),
/* harmony export */   isGeckoLibModel: () => (/* binding */ isGeckoLibModel),
/* harmony export */   isValidNamespace: () => (/* binding */ isValidNamespace),
/* harmony export */   isValidPath: () => (/* binding */ isValidPath),
/* harmony export */   make: () => (/* binding */ make),
/* harmony export */   onlyIfGeckoLib: () => (/* binding */ onlyIfGeckoLib),
/* harmony export */   removeCodecCallback: () => (/* binding */ removeCodecCallback),
/* harmony export */   removeEventListener: () => (/* binding */ removeEventListener),
/* harmony export */   removeMonkeypatches: () => (/* binding */ removeMonkeypatches)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./ts/constants.ts");

const VALID_NAMESPACE_PATTERN = new RegExp('^[_\\-.a-z0-9]+$');
const VALID_PATH_PATTERN = new RegExp('^[_\\-/.a-z0-9]+$');
const Monkeypatches = new Map();
/**
 * Add what is effectively an override of another javascript function in a target object.
 * <p>
 * The patched function should call the original first and operate on the result to ensure compatibility
 * </p>
 *
 * @param symbol The target object
 * @param path The property of the target to access, or null to access the root target itself
 * @param functionKey The name of the function to replace
 * @param newFunction The function to patch in to replace the target
 */
const addMonkeypatch = (symbol, path, functionKey, newFunction) => {
    const pathAccessor = path ? symbol[path] : symbol;
    if (!Monkeypatches.get(symbol))
        Monkeypatches.set(symbol, { _pathAccessor: pathAccessor });
    Monkeypatches.get(symbol)[functionKey] = pathAccessor[functionKey];
    pathAccessor[functionKey] = newFunction;
};
/**
 * Remove all previously added monkeypatches, reverting their operation to prior to the patch
 */
const removeMonkeypatches = () => {
    Monkeypatches.forEach(symbol => {
        Object.keys(symbol).forEach(functionKey => {
            if (functionKey.startsWith('_'))
                return;
            symbol._pathAccessor[functionKey] = symbol[functionKey];
        });
    });
    Monkeypatches.clear();
};
/**
 * Wrap a callback object with a conditional check on the project being a GeckoLib project, for safety
 */
const onlyIfGeckoLib = (callback) => {
    return e => {
        if (isGeckoLibModel())
            callback(e);
    };
};
/**
 * Add an event listener to Blockbench's event callback system.
 * <p>
 * This should be done in <code>codec.ts#loadCodec</code> or in the plugin creation in <code>index.ts</code>
 */
const addEventListener = (eventName, callback) => {
    Blockbench.on(eventName, callback);
};
/**
 * Remove a previously registered event listener from Blockbench's event callback system.
 * <p>
 * All registered event listeners should be removed when the plugin or codec is unloaded
 */
const removeEventListener = (eventName, callback) => {
    Blockbench.removeListener(eventName, callback);
};
/**
 * Add a callback to a codec to be called after the task has been completed
 * <p>
 * This should be done in <code>codec.ts#loadCodec</code> or in the plugin creation in <code>index.ts</code>
 */
const addCodecCallback = (codec, taskName, callback) => {
    codec.on(taskName, callback);
};
/**
 * Helper function that allows instantiation of an object and simultaneous property-modification without needing a local variable
 */
function make(obj, consumer) {
    consumer(obj);
    return obj;
}
/**
 * Remove a previously added codec task completion callback
 * <p>
 * All registered coded callbacks should be removed when the plugin or codec is unloaded
 */
const removeCodecCallback = (codec, taskName, callback) => {
    codec.removeListener(taskName, callback);
};
/**
 * Whether a given string is a valid ResourceLocation path for Minecraft
 */
const isValidPath = (path) => {
    return VALID_PATH_PATTERN.test(path);
};
/**
 * Whether a given string is a valid ResourceLocation namespace for Minecraft
 */
const isValidNamespace = (namespace) => {
    return VALID_NAMESPACE_PATTERN.test(namespace);
};
/**
 * Whether a map-like object has no defined keys or values
 */
const isEmpty = (object = {}) => Object.keys(object).length === 0;
/**
 * Whether the currently focussed model is a GeckoLib model
 */
const isGeckoLibModel = () => Format.id === _constants__WEBPACK_IMPORTED_MODULE_0__.GECKOLIB_MODEL_ID;
/**
 * Whether the current project is a GeckoLib model that has or uses item render perspective transforms
 */
const hasModelDisplaySettings = () => isGeckoLibModel() && Project && ((Project[_constants__WEBPACK_IMPORTED_MODULE_0__.PROPERTY_MODEL_TYPE] === _constants__WEBPACK_IMPORTED_MODULE_0__.GeckoModelType.ITEM || !isEmpty(Project.display_settings)) || settings[_constants__WEBPACK_IMPORTED_MODULE_0__.SETTING_ALWAYS_SHOW_DISPLAY].value);


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"animation_utils","version":"4.1","private":true,"description":"GeckoLib","main":"index.js","scripts":{"prebuild":"npm run test","build":"npm run build:only","build:only":"webpack && npm run update_manifest","update_manifest":"node scripts/updateManifest.mjs","start":"webpack --watch --mode=development","lint":"eslint .","lint:fix":"eslint --fix .","tsc":"tsc --noEmit","pretest":"npm run lint && npm run tsc","test":"npm run test:only","test:only":"jest"},"author":"Eliot Lash, Tslat, Gecko, McHorse","license":"MIT","blockbenchConfig":{"title":"GeckoLib Animation Utils","author":"Eliot Lash, Tslat, Gecko, McHorse","icon":"icon.png","description":"Create animated blocks, items, entities, and armor using the GeckoLib library and plugin.","has_changelog":true,"min_version":"4.11.0","max_version":"5.0.0","variant":"both","website":"https://github.com/bernie-g/geckolib/wiki","repository":"https://github.com/JannisX11/blockbench-plugins/tree/master/plugins/animation_utils","bug_tracker":"https://github.com/bernie-g/geckolib/issues"},"sideEffects":["./index.js"],"devDependencies":{"@types/jest":"^29.5.4","@types/lodash":"^4.14.197","@typescript-eslint/eslint-plugin":"^6.5.0","@typescript-eslint/parser":"^6.5.0","blockbench-types":"^4.9.0","eol":"0.9.1","eslint":"^7.7.0","indent-string":"^5.0.0","jest":"^29.6.4","ts-jest":"^29.1.1","ts-loader":"^9.4.4","typescript":"^4.9.5","webpack":"^5.88.2","webpack-cli":"^5.1.4"},"dependencies":{"lodash":"^4.17.21","semver":"7.3.2"}}');

/***/ }),

/***/ "./resources/armorTemplate.json":
/*!**************************************!*\
  !*** ./resources/armorTemplate.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"meta":{"format_version":"3.2","model_format":"animated_entity_model","box_uv":true},"name":"CustomArmor","geo_name":"CustomArmor","resolution":{"width":64,"height":64},"elements":[{"name":"dontTouch","from":[-4,24,-4],"to":[4,32,4],"autouv":1,"color":0,"export":false,"locked":true,"origin":[0,0,0],"uuid":"9675593e-b27d-b70e-e1ea-1fc29f46a294"},{"name":"dontTouch","from":[-4,12,-2],"to":[4,24,2],"autouv":1,"color":0,"export":false,"locked":true,"origin":[0,24,0],"uuid":"fa43156a-2a62-948c-082f-483d525f6d1f"},{"name":"dontTouch","from":[4,12,-2],"to":[8,24,2],"autouv":1,"color":0,"export":false,"locked":true,"origin":[4,22,0],"uuid":"aa51170c-8b32-fb62-71f1-58ac0b7785a8"},{"name":"dontTouch","from":[-8,12,-2],"to":[-4,24,2],"autouv":1,"color":0,"export":false,"locked":true,"origin":[4,22,0],"uuid":"bf2c2539-20e3-cfcc-94c0-491734019889"},{"name":"dontTouch","from":[-4,0,-2],"to":[0,12,2],"autouv":1,"color":0,"export":false,"locked":true,"origin":[4,22,0],"uuid":"17b9bae0-356a-9bba-fad9-4672e2671191"},{"name":"dontTouch","from":[0,0,-2],"to":[4,12,2],"autouv":1,"color":0,"export":false,"locked":true,"origin":[4,22,0],"uuid":"7b31bac4-dc40-2b93-1204-7bbdcfe7d924"}],"outliner":[{"name":"bipedHead","uuid":"d340b6fa-56aa-9c0f-3560-7a067643b77d","export":true,"isOpen":true,"visibility":true,"autouv":0,"origin":[0,24,0],"children":["9675593e-b27d-b70e-e1ea-1fc29f46a294",{"name":"armorHead","uuid":"6ab88dea-c816-d2bb-6be9-05ed7838da97","export":true,"isOpen":true,"visibility":true,"autouv":0,"origin":[0,24,0],"children":[]}]},{"name":"bipedBody","uuid":"ce5b366c-fd87-41ae-9a73-e0a4d4b05f8d","export":true,"isOpen":true,"visibility":true,"autouv":0,"origin":[0,24,0],"children":["fa43156a-2a62-948c-082f-483d525f6d1f",{"name":"armorBody","uuid":"282fcdbb-8ea9-4a13-4154-f2ed20d696c8","export":true,"isOpen":true,"visibility":true,"autouv":0,"origin":[0,24,0],"children":[]}]},{"name":"bipedRightArm","uuid":"d8113cc7-7e10-0930-259e-b8e4211ce9da","export":true,"isOpen":true,"visibility":true,"autouv":0,"origin":[4,22,0],"children":["aa51170c-8b32-fb62-71f1-58ac0b7785a8",{"name":"armorRightArm","uuid":"c5300e23-fd2f-b56c-3552-45d6650e11c6","export":true,"isOpen":true,"visibility":true,"autouv":0,"origin":[4,22,0],"children":[]}]},{"name":"bipedLeftArm","uuid":"3b8901e8-3420-0834-51eb-76d64ff2ae8f","export":true,"isOpen":true,"visibility":true,"autouv":0,"origin":[-4,22,0],"children":["bf2c2539-20e3-cfcc-94c0-491734019889",{"name":"armorLeftArm","uuid":"b0d41a53-f4ce-53c1-f899-5a2048c90ac2","export":true,"isOpen":true,"visibility":true,"autouv":0,"origin":[-4,22,0],"children":[]}]},{"name":"bipedLeftLeg","uuid":"37231be7-a8ef-22ca-7fea-40aed58003bb","export":true,"isOpen":true,"visibility":true,"autouv":0,"origin":[-2,12,0],"children":["17b9bae0-356a-9bba-fad9-4672e2671191",{"name":"armorLeftLeg","uuid":"e4b19746-2d17-1f56-befe-00718165ae50","export":true,"isOpen":true,"visibility":true,"autouv":0,"origin":[-2,12,0],"children":[]},{"name":"armorLeftBoot","uuid":"9fe26b9a-ad66-9e6b-2fa2-4168e333b4be","export":true,"isOpen":true,"visibility":true,"autouv":0,"origin":[-2,12,0],"children":[]}]},{"name":"bipedRightLeg","uuid":"45c031a5-b6be-e0a7-5454-b45d07f28429","export":true,"isOpen":true,"visibility":true,"autouv":0,"origin":[2,12,0],"children":["7b31bac4-dc40-2b93-1204-7bbdcfe7d924",{"name":"armorRightLeg","uuid":"60238f18-e74b-c863-cb45-2e2f162221bd","export":true,"isOpen":true,"visibility":true,"autouv":0,"origin":[2,12,0],"children":[]},{"name":"armorRightBoot","uuid":"eb3db34b-ccfe-dae9-ac4d-4e22c3222f70","export":true,"isOpen":true,"visibility":true,"autouv":0,"origin":[2,12,0],"children":[]}]}],"textures":[]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var semver_functions_coerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! semver/functions/coerce */ "./node_modules/semver/functions/coerce.js");
/* harmony import */ var semver_functions_coerce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(semver_functions_coerce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semver_functions_satisfies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semver/functions/satisfies */ "./node_modules/semver/functions/satisfies.js");
/* harmony import */ var semver_functions_satisfies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semver_functions_satisfies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../package.json */ "./package.json");
/* harmony import */ var _animationUi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animationUi */ "./ts/animationUi.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./ts/utils.ts");
/* harmony import */ var _keyframe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keyframe */ "./ts/keyframe.ts");
/* harmony import */ var _codec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./codec */ "./ts/codec.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./ts/constants.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./ts/events.ts");









const { version, blockbenchConfig } = _package_json__WEBPACK_IMPORTED_MODULE_2__;
const SUPPORTED_BB_VERSION_RANGE = `${blockbenchConfig.min_version} - ${blockbenchConfig.max_version}`;
if (!semver_functions_satisfies__WEBPACK_IMPORTED_MODULE_1___default()(semver_functions_coerce__WEBPACK_IMPORTED_MODULE_0___default()(Blockbench.version), SUPPORTED_BB_VERSION_RANGE))
    alert(`GeckoLib Animation Utils currently only supports Blockbench ${SUPPORTED_BB_VERSION_RANGE}. Please ensure you are using this version of Blockbench to avoid bugs and undefined behavior.`);
// Register the plugin and define what it adds
(function () {
    let pluginSettings;
    let pluginProperties;
    let pluginMenuItems;
    BBPlugin.register("animation_utils", Object.assign({}, blockbenchConfig, {
        name: blockbenchConfig.title,
        version,
        await_loading: true,
        onload() {
            (0,_events__WEBPACK_IMPORTED_MODULE_3__.addEventListeners)();
            (0,_animationUi__WEBPACK_IMPORTED_MODULE_4__.loadAnimationUI)();
            (0,_keyframe__WEBPACK_IMPORTED_MODULE_5__.loadKeyframeOverrides)();
            pluginSettings = createPluginSettings();
            pluginProperties = createPluginProperties();
            pluginMenuItems = createPluginMenuItems();
            for (const menuItem of pluginMenuItems) {
                MenuBar.addAction(menuItem.action, menuItem.menuCategory);
            }
            console.log("Loaded GeckoLib plugin");
        },
        onunload() {
            for (const setting of pluginSettings) {
                setting.delete();
            }
            for (const property of pluginProperties) {
                property.delete();
            }
            for (const menuItem of pluginMenuItems) {
                menuItem.action.delete();
            }
            (0,_keyframe__WEBPACK_IMPORTED_MODULE_5__.unloadKeyframeOverrides)();
            (0,_animationUi__WEBPACK_IMPORTED_MODULE_4__.unloadAnimationUI)();
            (0,_events__WEBPACK_IMPORTED_MODULE_3__.removeEventListeners)();
            _codec__WEBPACK_IMPORTED_MODULE_6__.format.delete();
            console.clear();
        },
    }));
})();
/**
 * Create and return the plugin's settings.
 * <p>
 * These are found in the Settings panel in the plugin info window
 */
function createPluginSettings() {
    return [
        new Setting(_constants__WEBPACK_IMPORTED_MODULE_7__.SETTING_AUTO_PARTICLE_TEXTURE, {
            value: true,
            category: "export",
            name: "Auto-compute block/item particle texture",
            description: "Attempt to auto-compute the particle texture for a GeckoLib block/item model if one isn't already specified when exporting the display settings json"
        }),
        new Setting(_constants__WEBPACK_IMPORTED_MODULE_7__.SETTING_CONVERT_BEDROCK_ANIMATIONS, {
            value: true,
            category: "export",
            name: "Convert bedrock animations on export",
            description: "Automatically convert bedrock-format animations to GeckoLib-compatible animations when exporting, if relevant. May have a performance improvement on larger projects"
        }),
        new Setting(_constants__WEBPACK_IMPORTED_MODULE_7__.SETTING_ALWAYS_SHOW_DISPLAY, {
            value: false,
            category: "edit",
            name: "Always show display tab",
            description: "Force the Display tab to always show, even when not an Item type model"
        }),
        new Setting(_constants__WEBPACK_IMPORTED_MODULE_7__.SETTING_REMEMBER_EXPORT_LOCATIONS, {
            value: true,
            category: "export",
            name: "Remember file export locations",
            description: "Remember where you export model/display/animation files to for re-use. Stores the file paths in the bbmodel project file."
        }),
        (0,_utils__WEBPACK_IMPORTED_MODULE_8__.make)(new Setting(_constants__WEBPACK_IMPORTED_MODULE_7__.SETTING_DEFAULT_MODID, {
            // The below is absolutely disgusting, but I have no choice because this is a bug in Blockbench's API
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            type: 'text',
            value: "",
            category: "export",
            name: "Default Mod ID",
            description: "Default Mod ID for models (if applicable)"
        }), setting => {
            setting.onChange = function () {
                const invalidNamespaceChar = new RegExp('[^_\\-.a-z0-9]+', 'g');
                const pseudoWhitepaceChar = new RegExp('[\\s&-]+', 'g');
                this.master_value = this.master_value.toLowerCase().replace(pseudoWhitepaceChar, "_").replace(invalidNamespaceChar, "");
                return {};
            };
        })
    ];
}
/**
 * Create and return the plugin's properties.
 * <p>
 * These are metadata values stored in the project, usually used in project settings windows
 */
function createPluginProperties() {
    return [
        (0,_utils__WEBPACK_IMPORTED_MODULE_8__.make)(new Property(ModelProject, "string", _constants__WEBPACK_IMPORTED_MODULE_7__.PROPERTY_MODID, {
            label: "Mod ID",
            condition: {
                formats: [_constants__WEBPACK_IMPORTED_MODULE_7__.GECKOLIB_MODEL_ID]
            },
            values: [],
            merge_validation: _utils__WEBPACK_IMPORTED_MODULE_8__.isValidNamespace
        }), property => {
            property['placeholder'] = 'my_modid';
            property['description'] = 'The modid of the mod this model is for';
            property.getDefault = function () {
                return settings[_constants__WEBPACK_IMPORTED_MODULE_7__.SETTING_DEFAULT_MODID].value;
            };
        }),
        (0,_utils__WEBPACK_IMPORTED_MODULE_8__.make)(new Property(ModelProject, "enum", _constants__WEBPACK_IMPORTED_MODULE_7__.PROPERTY_MODEL_TYPE, {
            label: "Model Type",
            condition: {
                formats: [_constants__WEBPACK_IMPORTED_MODULE_7__.GECKOLIB_MODEL_ID]
            },
            exposed: false,
            options: _constants__WEBPACK_IMPORTED_MODULE_7__.GeckoModelType,
            values: Object.values(_constants__WEBPACK_IMPORTED_MODULE_7__.GeckoModelType)
        }), property => {
            property['description'] = 'The type of GeckoLib object this model is for. Leave as the default value if unsure';
        }),
        (0,_utils__WEBPACK_IMPORTED_MODULE_8__.make)(new Property(ModelProject, "instance", _constants__WEBPACK_IMPORTED_MODULE_7__.PROPERTY_FILEPATH_CACHE, {
            label: "GeckoLib Filepath Cache",
            condition: {
                formats: [_constants__WEBPACK_IMPORTED_MODULE_7__.GECKOLIB_MODEL_ID]
            },
            exposed: false,
            values: []
        }), property => {
            property.default = {};
        })
    ];
}
/**
 * Create and return the plugin's menu items
 * <p>
 * These are added to Blockbench's menu bar or submenus
 */
function createPluginMenuItems() {
    return [
        {
            action: new Action("export_geckolib_model", {
                name: "Export GeckoLib Model",
                icon: "archive",
                description: "Export your model geometry as a model for GeckoLib.",
                category: "file",
                condition: () => (0,_utils__WEBPACK_IMPORTED_MODULE_8__.isGeckoLibModel)(),
                click: function () {
                    _codec__WEBPACK_IMPORTED_MODULE_6__["default"].export();
                },
            }),
            menuCategory: 'file.export'
        },
        {
            action: new Action("export_geckolib_display", {
                name: "Export GeckoLib Display Settings",
                icon: "icon-bb_interface",
                description: "Export your item/block display settings for GeckoLib.",
                category: "file",
                condition: () => (0,_utils__WEBPACK_IMPORTED_MODULE_8__.isGeckoLibModel)() && (0,_utils__WEBPACK_IMPORTED_MODULE_8__.hasModelDisplaySettings)(),
                click: _codec__WEBPACK_IMPORTED_MODULE_6__.buildDisplaySettingsJson,
            }),
            menuCategory: 'file.export'
        },
        {
            action: new Action("export_geckolib_animations", {
                name: "Export GeckoLib Animations",
                icon: "movie",
                description: "Export your model animations for GeckoLib.",
                category: "file",
                condition: () => (0,_utils__WEBPACK_IMPORTED_MODULE_8__.isGeckoLibModel)() && !(0,_utils__WEBPACK_IMPORTED_MODULE_8__.isEmpty)(AnimationItem.all) && typeof BarItems['export_animation_file'] === 'object',
                click: e => BarItems['export_animation_file'].trigger(e),
            }),
            menuCategory: 'file.export'
        }
    ];
}

})();

/******/ })()
;