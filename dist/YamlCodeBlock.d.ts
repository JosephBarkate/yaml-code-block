import React from 'react';
import './YamlCodeBlock.css';
export interface YamlCodeBlockProps {
    yamlData: string;
    showLineNumbers?: boolean;
    font?: string;
    backgroundColor?: string;
}
declare const YamlCodeBlock: React.FC<YamlCodeBlockProps>;
export default YamlCodeBlock;
