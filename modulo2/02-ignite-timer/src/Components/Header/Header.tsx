import { NavLink } from 'react-router-dom'
import { Scroll, Timer } from '@phosphor-icons/react'

import { HeaderContainer } from './Header.styles'
import LogoImage from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={LogoImage}
        alt="Logo Image"
      />
      <nav>
        <NavLink
          to="/"
          title="Timer"
        >
          <Timer size={24} />
        </NavLink>
        <NavLink
          to="/history"
          title="History"
        >
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
