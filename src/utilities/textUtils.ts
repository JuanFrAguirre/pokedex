export const capitalize = (text: string): string => {
  return text
    .split('')
    .map((x, i) => {
      if (i === 0) return x.toUpperCase()
      return x
    })
    .join('')
}
