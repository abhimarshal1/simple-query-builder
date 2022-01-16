"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CombinatorToggle = _ref => {
  let {
    combinators,
    selectedCombinator,
    handleCombinatorToggle
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_material.ToggleButtonGroup, {
    id: "combinator-toggle",
    className: "mb-2",
    value: selectedCombinator.name,
    exclusive: true,
    onChange: handleCombinatorToggle
  }, combinators.map(_ref2 => {
    let {
      name,
      label
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(_material.ToggleButton, {
      key: name,
      value: name,
      className: "".concat(selectedCombinator.name === name ? "selected" : "")
    }, label);
  }));
};

CombinatorToggle.propTypes = {
  combinators: _propTypes.default.array.isRequired,
  selectedCombinator: _propTypes.default.object.isRequired,
  handleCombinatorToggle: _propTypes.default.func.isRequired
};
var _default = CombinatorToggle;
exports.default = _default;