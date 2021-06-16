export const wordFormatter = string => {
  if (string === 'MAINTENANCE_PENDING') {
    string = string.split('_')
    string[0] = string[0].toLowerCase();
    string[1] = string[1].toLowerCase();
    const firstStringChar = string[0].charAt(0).toUpperCase();
    const secondStringChar = string[1].charAt(0).toUpperCase();
    string[0] = string[0].slice(1)
    string[1] = string[1].slice(1)
    
    string = (firstStringChar + string[0]) + ' ' + (secondStringChar + string[1])
    return string;
  }
  string = string.toLowerCase();
  let firstChar = string.charAt(0).toUpperCase();
  string = string.slice(1)
  return firstChar + string
}

export const batteryFormatter = float => {
  let batteryLevel = (float * 100).toFixed(0)
  return `${batteryLevel}%`;
}