import { ButtonBase } from '@elements/buttons/ButtonBase'
import { AgreementShortContext } from '@modules/docs/AgreementShort/AgreementShortContext'
import { useContext } from 'react'

export const AgreementShortButton = ({ textProps, classProps, buttonType }: {
  textProps: string
  classProps: string
  buttonType: string
}): JSX.Element => {
  const { setShownPriceDamage, setShownRules } = useContext(AgreementShortContext)

  return (
    <ButtonBase classProps={ classProps }
      handleHide={ buttonType === 'modalPriceDamage' ? setShownPriceDamage : setShownRules }
      textProps={ textProps }
    />
  )
}
