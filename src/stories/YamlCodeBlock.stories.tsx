import React from 'react';
import { Meta, Story } from '@storybook/react';

import { YamlCodeBlock, YamlCodeBlockProps } from '../YamlCodeBlock';

export default {
  title: 'YamlCodeBlock',
  component: YamlCodeBlock,
  argTypes: {
    yamlData: { control: 'text' },
    showLineNumbers: { control: 'boolean' },
    font: { control: 'text' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<YamlCodeBlockProps> = (args) => <YamlCodeBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  yamlData: 'Your YAML data goes here...',
};

export const WithLineNumbers = Template.bind({});
WithLineNumbers.args = {
  yamlData: 'Your YAML data goes here...',
  showLineNumbers: true,
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  yamlData: 'Your YAML data goes here...',
  font: 'Courier New',
  backgroundColor: '#333',
};
