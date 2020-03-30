"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _numeroPorExtenso = _interopRequireDefault(require("numero-por-extenso"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ReactInputPorExtenso = function ReactInputPorExtenso(_ref) {
  var tipoExtenso = _ref.tipoExtenso,
      _onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ["tipoExtenso", "onChange"]);

  return _react["default"].createElement("input", _extends({
    type: "number",
    onChange: function onChange(e) {
      var numeroPorExtenso = _numeroPorExtenso["default"].porExtenso(e.target.value, _numeroPorExtenso["default"].estilo[tipoExtenso]);

      _onChange(numeroPorExtenso, e);
    }
  }, props));
};

ReactInputPorExtenso.prototype = {
  tipoExtenso: _propTypes["default"].oneOf(['normal', 'monetario', 'porcentagem'])
};
ReactInputPorExtenso.defaultProps = {
  tipoExtenso: "normal"
};
var _default = ReactInputPorExtenso;
exports["default"] = _default;