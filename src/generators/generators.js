/**
 * @param {number} max
 * @returns {number} ==> numero entre 0 e max-1 
 */
export function SortNum(max) {

  if (typeof max !== 'number')
    return 0

  return Math.floor(Math.random() * max)
}

/**
 * caracteres permitidos no id
 */
const numericChars = [
  '1', '2', '3', '4', '5',
  '6', '7', '8', '9', '0'
]

/**
 * 
 * @param {number} n => tamanho do id 
 */
export function GetID(n) {
  if (typeof n !== 'number' || n < 1) n = 1

  const arr = []
  while (arr.length < n) {
    const pos = SortNum(numericChars.length)
    arr.push(numericChars[pos])
  }
  return arr.join('')
}