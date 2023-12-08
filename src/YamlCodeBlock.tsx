import React from 'react'
import './YamlCodeBlock.css' // Apply your styles here
import { formatJsonForDisplay, isJsonString } from './Utility'

const copyIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height='16'
    width='14'
    viewBox='0 0 448 512'
  >
    <path d='M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z' />
  </svg>
)

export interface YamlCodeBlockProps {
  yamlData: string
  showLineNumbers?: boolean
  font?: string
  fontColor?: string
  fontSize?: string
  backgroundColor?: string
  maxHeight?: string
}

const YamlCodeBlock: React.FC<YamlCodeBlockProps> = ({
  yamlData,
  showLineNumbers = false,
  font = 'monospace',
  fontColor = '#3f515f',
  backgroundColor = '#f0f0f0',
  fontSize = '16px',
  maxHeight = '400px' // Default value of 400px
}) => {
  const formattedData = isJsonString(yamlData)
    ? formatJsonForDisplay(yamlData)
    : yamlData
  const lines = formattedData.split('\n')

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(yamlData)
      .then(() => {
        // Optionally, you can show a confirmation or change the button text temporarily
        console.log('YAML data copied to clipboard!')
      })
      .catch((err) => {
        console.error('Failed to copy: ', err)
      })
  }

  return (
    <div
      className='yaml-code-container'
      style={{ maxHeight, overflow: 'scroll', backgroundColor }}
    >
      <button className='copy-button' onClick={copyToClipboard}>
        {copyIcon}
      </button>
      {showLineNumbers && (
        <div
          className='line-numbers'
          style={{ fontSize, font, color: fontColor }}
        >
          {lines.map((_, index) => (
            <div key={index} className='line-number'>
              {index + 1}
            </div>
          ))}
        </div>
      )}
      <pre
        className='yaml-code-block'
        style={{ fontSize, font, color: fontColor }}
      >
        {lines.map((line, index) => (
          <div key={index} className='code-line'>
            <code>{line}</code>
          </div>
        ))}
      </pre>
    </div>
  )
}

export default YamlCodeBlock
