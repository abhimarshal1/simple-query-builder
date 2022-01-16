"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.json.stringify.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FilterGroup = _interopRequireDefault(require("../FilterGroup"));

var _CombinatorToggle = _interopRequireDefault(require("../CombinatorToggle"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const QueryBuilder = _ref => {
  let {
    onFinish,
    onCancel,
    config,
    returnAsString
  } = _ref;
  const {
    combinators
  } = config;

  const [selectedCombinator, setSelectedCombinator] = _react.default.useState(combinators[0]);

  const [data, setData] = (0, _react.useState)(() => (0, _utils.getInitialState)());
  const enableCombinator = data.length > 1;

  const addFilterGroup = () => {
    const newId = (0, _utils.getUniqueId)();
    const newData = [...data, [{
      id: newId,
      field: null,
      condition: null,
      value: null
    }]];
    setData(newData);
  };

  const handleDelete = rule => {
    const newData = data.filter(data => data !== rule);
    setData(newData);
  };

  const handleFinish = () => {
    if (returnAsString) {
      const combinatorSH = combinators.find(c => c.name === selectedCombinator.name).shorthand;
      onFinish((0, _utils.buildQuery)(config.conditions, data, combinatorSH));
    } else {
      const obj = _objectSpread(_objectSpread({}, data), {}, {
        combinator: selectedCombinator.name
      });

      onFinish(obj);
    }
  };

  const handleCombinatorToggle = e => {
    const newCombinator = combinators.find(item => item.name === e.target.value);
    setSelectedCombinator(newCombinator);
  };

  const handleFilterOnChange = (index, rule, name, value) => {
    setData(prev => {
      const newData = [...prev];
      const toChange = newData[index].find(d => d === rule);
      toChange[name] = value;
      return newData;
    });
  };

  const handleFilterAdd = index => {
    setData(prev => {
      const newId = (0, _utils.getUniqueId)();
      const newData = [...prev];
      newData[index] = [...newData[index], {
        id: newId,
        field: null,
        condition: null,
        value: null
      }];
      return newData;
    });
  };

  const handleFilterDelete = (index, id) => {
    setData(prev => {
      const newData = [...prev];
      newData[index] = newData[index].filter(rule => rule.id !== id);
      return newData;
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "fixed bg-black bg-opacity-30 inset-0 overflow-y-auto h-full w-full"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "relative top-20 mx-auto w-256 h-5/6 shadow-lg rounded-md bg-gray-900"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header h-24 bg-primary-100 p-5 rounded-t-md"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "text-lg leading-6 font-medium text-white-900"
  }, "Create tag and query"), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-gray-400 mt-2"
  }, "The query you build will be saved in your active view")), /*#__PURE__*/_react.default.createElement("div", {
    className: "body h-5/6 overflow-y-auto pb-24"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "p-5"
  }, enableCombinator && /*#__PURE__*/_react.default.createElement(_CombinatorToggle.default, {
    combinators: combinators,
    selectedCombinator: selectedCombinator,
    handleCombinatorToggle: handleCombinatorToggle
  }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, data.map((rules, index) => /*#__PURE__*/_react.default.createElement(_FilterGroup.default, {
    key: JSON.stringify(rules),
    showDelete: index !== 0,
    rules: rules,
    config: config,
    handleDelete: handleDelete,
    onFilterChange: (rule, name, value) => handleFilterOnChange(index, rule, name, value),
    onFilterAdd: () => handleFilterAdd(index),
    onFilterDelete: id => handleFilterDelete(index, id)
  }))), /*#__PURE__*/_react.default.createElement("button", {
    className: "mt-4 px-4 py-2 bg-primary-100 text-white rounded-lg shadow-sm hover:bg-primary-200",
    onClick: addFilterGroup
  }, "Add Filter Group"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-900 absolute bottom-0 footer w-full px-5 py-5 flex justify-between items-end"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "px-4 py-2 bg-gray-600 text-white font-medium rounded-lg shadow-sm hover:bg-primary-200",
    onClick: onCancel
  }, "Cancel"), /*#__PURE__*/_react.default.createElement("button", {
    className: "px-4 py-2 bg-primary-100 text-white text-base font-medium rounded-lg shadow-sm hover:bg-primary-200",
    onClick: handleFinish
  }, "Finish"))));
};

QueryBuilder.propTypes = {
  onFinish: _propTypes.default.func.isRequired,
  onCancel: _propTypes.default.func.isRequired,
  config: _propTypes.default.object.isRequired,
  returnAsString: _propTypes.default.bool
};
var _default = QueryBuilder;
exports.default = _default;