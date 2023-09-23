export const useCardColor = (classes) => {
  if (classes.length > 1) {
    return `${classes[0]}_${classes[1]}`
  }

  return classes[0]
}
