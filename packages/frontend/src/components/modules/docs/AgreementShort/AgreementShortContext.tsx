import { createContext } from 'react'

interface IDocsListContext {
  setShownPriceDamage: () => void
  setShownRules: () => void
}

export const AgreementShortContext = createContext<IDocsListContext>({
  setShownPriceDamage () {},
  setShownRules () {}
})
