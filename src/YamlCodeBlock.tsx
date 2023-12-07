import React from 'react'
import './YamlCodeBlock.css' // Apply your styles here

export interface YamlCodeBlockProps {
  yamlData: string
  showLineNumbers?: boolean
  font?: string
  fontColor?: string
  backgroundColor?: string
}

const YamlCodeBlock: React.FC<YamlCodeBlockProps> = ({
  yamlData,
  showLineNumbers = false,
  font = 'monospace',
  fontColor = '#3f515f',
  backgroundColor = '#f0f0f0'
}) => {
  const lines = yamlData.split('\n')
  return (
    <div className='yaml-code-container'>
      <pre
        className='yaml-code-block'
        style={{ fontFamily: font, color: fontColor, backgroundColor }}
      >
        {lines.map((line, index) => (
          <div key={index} className='code-line'>
            {showLineNumbers && (
              <span className='line-number'>{index + 1}</span>
            )}
            <code>{line}</code>
          </div>
        ))}
      </pre>
    </div>
  )
}

export default YamlCodeBlock
