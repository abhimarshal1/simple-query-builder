"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _md = require("react-icons/md");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Filter = _ref => {
  let {
    rule,
    config,
    showFilterDelete,
    onChange,
    onDelete
  } = _ref;
  const {
    fields,
    conditions,
    criterias
  } = config;
  const {
    id,
    field,
    condition,
    criteria
  } = rule;
  const criteriaList = criterias[field] || [];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "query-row flex items-center gap-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-64"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-sm mb-2"
  }, "Field"), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    id: "query-select",
    select: true,
    className: "bg-gray-700 rounded-md w-full p-0",
    value: field || ""
  }, fields.map(_ref2 => {
    let {
      name,
      label
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
      key: name,
      value: name,
      onClick: () => onChange(rule, "field", name)
    }, label);
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-64"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-sm mb-2"
  }, "Condition"), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    id: "query-select",
    select: true,
    className: "bg-gray-700 rounded-md w-full p-0",
    value: condition || ""
  }, conditions.map(_ref3 => {
    let {
      name,
      label
    } = _ref3;
    return /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
      key: name,
      value: name,
      onClick: () => onChange(rule, "condition", name)
    }, label);
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-60"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-sm mb-2"
  }, "Criteria"), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    id: "query-select",
    select: true,
    className: "bg-gray-700 rounded-md w-full",
    value: criteria || ""
  }, criteriaList.map(option => /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
    key: option,
    value: option,
    onClick: () => onChange(rule, "criteria", option)
  }, option)))), showFilterDelete && /*#__PURE__*/_react.default.createElement("button", {
    className: "self-end text-base p-3 text-white rounded-full shadow-sm bg-rose-800 hover:bg-rose-900 hover:scale-110",
    onClick: () => onDelete(id)
  }, /*#__PURE__*/_react.default.createElement(_md.MdDeleteOutline, null)));
};

Filter.propTypes = {
  rule: _propTypes.default.object.isRequired,
  config: _propTypes.default.object.isRequired,
  showFilterDelete: _propTypes.default.bool.isRequired,
  onChange: _propTypes.default.func.isRequired,
  onDelete: _propTypes.default.func.isRequired
};
var _default = Filter;
exports.default = _default;