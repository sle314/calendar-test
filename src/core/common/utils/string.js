export const removeCharFromStart = (string, char) =>
  string.startsWith(char) ? string.substring(1) : string

export const removeCharFromEnd = (string, char) =>
  string.endsWith(char) ? string.slice(0, -1) : string
