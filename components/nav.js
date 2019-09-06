import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { primary, secondary, transparentBackground } from '../styleguide/colors'

const StyledNav = styled.nav`
  text-align: center;
  background-color: ${transparentBackground};
  padding: 20px;
  position: fixed;
  width: 100vw;
`

const StyledUl = styled.ul`
  margin: 0;
  display: flex;
  justify-content: flex-end;
`

const StyledLi = styled.li`
  display: flex;
  &:not(:first-of-type){
    margin-left: 2em;
  }
`

const StyledA = styled.a`
  color: ${primary};
  text-decoration: none;
  font-size: 1em;
  outline: none;
  cursor: pointer;
  &:hover {
    color: ${secondary};
  }
`

const Nav = () => (
  <StyledNav>
    <StyledUl>
      <StyledLi>
        <Link href='#sobre'>
          <StyledA>Sobre</StyledA>
        </Link>
      </StyledLi>
      <StyledLi>
        <Link href='#projetos'>
          <StyledA>Projetos</StyledA>
        </Link>
      </StyledLi>
      <StyledLi>
        <Link href='#contato'>
          <StyledA>Contato</StyledA>
        </Link>
      </StyledLi>
    </StyledUl>
  </StyledNav>
)

export default Nav
