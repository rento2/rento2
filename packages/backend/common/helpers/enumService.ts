export function returnRandomFromEnum<T> (asEnum: T): string | undefined {
  const enumValues = Object.values(asEnum)
  const randomIndex = Math.floor((Math.random() * (enumValues.length - 1)) + 1)

  return enumValues[randomIndex]
}

