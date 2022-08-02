import { ErrorBackend } from '@widgets/popups/error/error-backend'
import { ErrorChoice } from '@widgets/popups/error/error-choice'
import { ErrorMassage } from '@widgets/popups/error/error-massege'
import { PageThanks } from '@widgets/popups/error/page-thanks'
import { useState } from 'react'
import { ModalBase } from '../../../modals/modal-base/ModalBase'

export const ErrorBackendLoyut = (): JSX.Element => {
  const [openModal, setOpenModal] = useState(true)

  const [clickMassage, setClickMessage] = useState(false)

  const [writeMassage, setWriteMessage] = useState(false)

  const [sendMassage, setSendMessage] = useState(false)

  const handleCloseModal = (): void => {
    document.body.classList.remove('modal-open')
    setOpenModal(!openModal)
  }

  const openChoice = (): void => {
    setClickMessage(true)
  }

  const openMassage = (): void => {
    setWriteMessage(true)
  }

  const openThank = (): void => {
    setSendMessage(true)
  }

  return (

    <ModalBase
      isOpen={ openModal }
      isSwipe={ true }
      translate="bottom"
      onClose={ handleCloseModal }
    >
      {(clickMassage)
        ? ((writeMassage)
            ? (sendMassage)
                ? <PageThanks />

                : <ErrorMassage openThank={ openThank } />
            : (
              <ErrorChoice close={ handleCloseModal }
                openMassage={ openMassage }
              />
              ))

        : <ErrorBackend openChoice={ openChoice } />
            }
    </ModalBase>
  )
}
