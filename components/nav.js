import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { primary, secondary, hardBackground } from '../styleguide/colors'

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
`

const menuHeight = ( scrollPosition ) => {
}

const StyledNav = styled.nav`
  text-align: center;
  background-color: ${primary};
  padding: 20px 20px 20px 0;
  width: 1600px;
  position: fixed;
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  text-transform: uppercase;
  z-index: 99;
`

const StyledUl = styled.ul`
  margin: 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
`

const StyledLi = styled.li`
  display: flex;
  &:not(:first-of-type){
    margin-left: 2em;
  }
`

const StyledA = styled.a`
  color: ${hardBackground};
  text-decoration: none;
  outline: none;
  cursor: pointer;
  &:hover {
    color: ${secondary};
  }
`

const StyledP = styled.p`
color: ${hardBackground};
`

class Nav extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: 0
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  
  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
  
    this.setState({
      scrollPosition: winScroll,
    })
  }

  render() {
    return (
      <StyledDiv>
        <StyledNav style={{transform: "translate3d(0,"+ (this.state.scrollPosition > 60 ? 0 : (60 - this.state.scrollPosition))+ "px, 0px)"}}>
          <StyledP>teste</StyledP>
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
      </StyledDiv>
    )
  }
}

export default Nav
