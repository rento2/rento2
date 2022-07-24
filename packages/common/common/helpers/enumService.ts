export function returnRandomFromEnum<T> (asEnum: T): T[keyof T] | undefined {
  const enumValues = createArrFromEnum(asEnum)
  const randomIndex = Math.floor((Math.random() * (enumValues.length - 1)) + 1)

  return enumValues[randomIndex]
}

export function createArrFromEnum<T> (asEnum: T): Array<T[keyof T]> {
  return Object.keys(asEnum)
    .map(n => Number.parseInt(n))
    .filter(n => !Number.isNaN(n)) as unknown as Array<T[keyof T]>
}
