type TWords = Record<TWord, string[]>
type TWord = 'ночь' | 'минута' | 'кровать' | 'ребёнок' | 'гость' | 'комната'

const pluralize = (word: TWord, count: number): string => {
  const words: TWords = {
    ночь: ['ночь', 'ночи', 'ночей'],
    минута: ['минута', 'минуты', 'минут'],
    кровать: ['кровать', 'кровати', 'кроватей'],
    ребёнок: ['ребёнок', 'ребёнка', 'детей'],
    гость: ['гость', 'гостя', 'гостей'],
    комната: ['комната', 'комнаты', 'комнат']
  }

  if (count % 10 === 1 && count % 100 !== 11) {
    return words[word][0] as string
  } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
    return words[word][1] as string
  } else {
    return words[word][2] as string
  }
}

export { pluralize }
