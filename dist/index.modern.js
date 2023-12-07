import React from 'react';

var YamlCodeBlock = function YamlCodeBlock(_ref) {
  var yamlData = _ref.yamlData,
    _ref$showLineNumbers = _ref.showLineNumbers,
    showLineNumbers = _ref$showLineNumbers === void 0 ? false : _ref$showLineNumbers,
    _ref$font = _ref.font,
    font = _ref$font === void 0 ? 'monospace' : _ref$font,
    _ref$backgroundColor = _ref.backgroundColor,
    backgroundColor = _ref$backgroundColor === void 0 ? '#f0f0f0' : _ref$backgroundColor;
  return React.createElement("pre", {
    className: "yaml-code-block",
    style: {
      fontFamily: font,
      backgroundColor: backgroundColor
    }
  }, showLineNumbers && yamlData.split('\n').map(function (_line, index) {
    return React.createElement("span", {
      key: index,
      className: "line-number"
    }, index + 1);
  }), React.createElement("code", null, yamlData));
};

export { YamlCodeBlock };
//# sourceMappingURL=index.modern.js.map
