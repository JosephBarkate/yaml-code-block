import React from 'react'
import { Meta, Story } from '@storybook/react'

import YamlCodeBlock, { YamlCodeBlockProps } from '../YamlCodeBlock'

export default {
  title: 'YamlCodeBlock',
  component: YamlCodeBlock,
  argTypes: {
    yamlData: { control: 'text' },
    showLineNumbers: { control: 'boolean' },
    font: { control: 'text' },
    backgroundColor: { control: 'color' }
  }
} as Meta

const exampleYAML = `doe: "a deer, a female deer"
ray: "a drop of golden sun"
pi: 3.14159
xmas: true
french-hens: 3
calling-birds:
    - huey
    - dewey
    - louie
    - fred
xmas-fifth-day:
calling-birds: four
french-hens: 3
golden-rings: 5
partridges:
    count: 1
    location: "a pear tree"
turtle-doves: two`

const Template: Story<YamlCodeBlockProps> = (args) => (
  <YamlCodeBlock {...args} />
)

export const Default = Template.bind({})
Default.args = {
  yamlData: exampleYAML
}

export const WithLineNumbers = Template.bind({})
WithLineNumbers.args = {
  yamlData: exampleYAML,
  showLineNumbers: true
}

export const CustomStyle = Template.bind({})
CustomStyle.args = {
  yamlData: exampleYAML,
  font: 'Courier New',
  backgroundColor: '#333'
}
