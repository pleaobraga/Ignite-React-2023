import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo.svg'
import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
} from './Header.styles'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transacao</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
