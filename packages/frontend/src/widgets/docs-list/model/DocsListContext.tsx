import { createContext } from 'react'

interface IDocsListContext {
  setShownPriceDamage: () => void
  setShownRules: () => void
}

export const DocsListContext = createContext<IDocsListContext>({
  setShownPriceDamage () {},
  setShownRules () {}
})
