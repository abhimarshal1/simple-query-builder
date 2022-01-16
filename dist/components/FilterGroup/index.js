"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.json.stringify.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _md = require("react-icons/md");

var _Filter = _interopRequireDefault(require("../Filter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Components
const FilterGroup = _ref => {
  let {
    rules,
    showDelete,
    config,
    handleDelete,
    onFilterChange,
    onFilterAdd,
    onFilterDelete
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center gap-8 mb-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-800 flex-none w-220 p-4 rounded-md border border-gray-500"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col gap-2"
  }, rules.map((rule, index) => /*#__PURE__*/_react.default.createElement(_Filter.default, {
    key: JSON.stringify(rule),
    rule: rule,
    config: config,
    onChange: onFilterChange,
    showFilterDelete: index !== 0,
    onDelete: onFilterDelete
  }))), /*#__PURE__*/_react.default.createElement("button", {
    className: "mt-2 text-base p-3 text-white rounded-full shadow-sm bg-primary-100 hover:bg-primary-200 hover:scale-110",
    onClick: () => onFilterAdd()
  }, /*#__PURE__*/_react.default.createElement(_md.MdAdd, null))), showDelete && /*#__PURE__*/_react.default.createElement("button", {
    className: "text-xl p-3 text-white rounded-full shadow-sm bg-rose-800 hover:bg-rose-900 hover:scale-110",
    onClick: () => handleDelete(rules)
  }, /*#__PURE__*/_react.default.createElement(_md.MdDeleteOutline, null)));
};

FilterGroup.propTypes = {
  rules: _propTypes.default.array.isRequired,
  config: _propTypes.default.object.isRequired,
  showDelete: _propTypes.default.bool.isRequired,
  handleDelete: _propTypes.default.func.isRequired,
  onFilterChange: _propTypes.default.func.isRequired,
  onFilterAdd: _propTypes.default.func.isRequired,
  onFilterDelete: _propTypes.default.func.isRequired
};
var _default = FilterGroup;
exports.default = _default;