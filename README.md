# yaml-code-block

> Package that neatly displays yml in a code block

[![NPM](https://img.shields.io/npm/v/yaml-code-block.svg)](https://www.npmjs.com/package/yaml-code-block) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save yaml-code-block
```

## Usage

```tsx
import React, { Component } from 'react'

import YamlCodeBlock, { YamlCodeBlockProps } from 'YamlCodeBlock'
yamlData,
  (showLineNumbers = false),
  (font = 'monospace'),
  (fontColor = '#3f515f'),
  (backgroundColor = '#f0f0f0')
class Example extends Component {
  inputProps: YamlCodeBlockProps = {
    yamlData = myData,
    showLineNumbers = true, // Optional
    font = 'monospace', // Optional
    fontColor = '#3f515f', // Optional
    backgroundColor = '#f0f0f0' // Optional
  }
  render() {
    return <YamlCodeBlock {...inputProps} />
  }
}
```

## License

MIT © [JosephBarkate](https://github.com/JosephBarkate)
