"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUniqueId = exports.getInitialState = exports.buildQuery = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.array.reduce.js");

var _uniqueId2 = _interopRequireDefault(require("lodash/uniqueId"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getUniqueId = () => (0, _uniqueId2.default)(_constants.PREFIX);

exports.getUniqueId = getUniqueId;

const getInitialState = () => {
  const firstUniqueId = (0, _uniqueId2.default)(_constants.PREFIX);
  return [[{
    id: firstUniqueId,
    field: "",
    condition: "",
    value: ""
  }]];
};

exports.getInitialState = getInitialState;

const buildFilterQuery = (rules, templateObj) => {
  const queryList = rules.map(_ref => {
    let {
      field,
      condition,
      criteria
    } = _ref;
    return templateObj[condition].replace("_op1", "(field.".concat(field, ")")).replace("_op2", "\\\"".concat(criteria, "\\\""));
  });
  return queryList.length > 1 ? queryList.join(" && ") : queryList[0];
};

const buildQuery = (conditions, ruleObject, combinatorSH) => {
  const templateObj = conditions.reduce((acc, _ref2) => {
    let {
      name,
      joinerTemplate
    } = _ref2;
    return _objectSpread(_objectSpread({}, acc), {}, {
      [name]: joinerTemplate
    });
  }, {});
  const queryList = ruleObject.map(rule => {
    const filterQuery = buildFilterQuery(rule, templateObj);
    return "(".concat(filterQuery, ")");
  });
  return queryList.length > 1 ? queryList.join(" ".concat(combinatorSH, " ")) : queryList[0];
};

exports.buildQuery = buildQuery;