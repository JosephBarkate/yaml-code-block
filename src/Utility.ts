// Function to check if a string is JSON
export const isJsonString = (str: string) => {
  try {
    JSON.parse(str)
    return true
  } catch (e) {
    return false
  }
}

// Convert JSON stringified YAML back to YAML
export const formatData = (data: string) => {
  if (isJsonString(data)) {
    try {
      const _jsonData = JSON.parse(data)
      return // jsYaml.dump(jsonData)
    } catch (e) {
      console.error('Error parsing JSON:', e)
      return data // Return original data if parsing fails
    }
  }
  return data // Return original data if it's not JSON
}

// Format JSON string for display
export const formatJsonForDisplay = (jsonStr: string) => {
  try {
    const jsonObj = JSON.parse(jsonStr)
    return JSON.stringify(jsonObj, null, 2) // Indented with 2 spaces
  } catch (e) {
    console.error('Error formatting JSON:', e)
    return jsonStr // Return the original string if formatting fails
  }
}
