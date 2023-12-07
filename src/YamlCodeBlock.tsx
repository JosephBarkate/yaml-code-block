import React from 'react';
import './YamlCodeBlock.css'; // Apply your styles here

export interface YamlCodeBlockProps {
  yamlData: string;
  showLineNumbers?: boolean;
  font?: string;
  backgroundColor?: string;
}

const YamlCodeBlock: React.FC<YamlCodeBlockProps> = ({
  yamlData,
  showLineNumbers = false,
  font = 'monospace',
  backgroundColor = '#f0f0f0',
}) => {
  return (
    <pre className="yaml-code-block" style={{ fontFamily: font, backgroundColor }}>
      {showLineNumbers &&
        yamlData.split('\n').map((_line, index) => (
          <span key={index} className="line-number">
            {index + 1}
          </span>
        ))}
      <code>{yamlData}</code>
    </pre>
  );
};

export default YamlCodeBlock;
