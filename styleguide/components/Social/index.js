import React from 'react'
import styled from 'styled-components'

import InstagramIcon from './Instagram'
import WhatsappIcon from './Whatsapp'
import { orange } from '../../colors'
import { instagram, whatsapp } from '../../data'

const StyledA = styled.a`
  color: transparent;
  cursor: pointer;
  width: auto;
`

const StyledWhatsappIcon = styled(WhatsappIcon)`
  width: auto;
  margin-left: 10px;

  &:hover {
    fill: ${orange}
  }
`

const StyledInstagramIcon = styled(InstagramIcon)`
  width: auto;
  &:hover {
    fill: ${orange}
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export default (props) => (
  <Wrapper>
    <StyledA href={instagram} target="_blank">
      <StyledInstagramIcon {...props} />
    </StyledA>
    <StyledA href={whatsapp} target="_blank">
      <StyledWhatsappIcon {...props} />
    </StyledA>
  </Wrapper>
)