import React from 'react'
import styled from 'styled-components'

import FacebookIcon from './Facebook'
import WhatsappIcon from './Whatsapp'
import { orange } from '../../colors'
import { facebook, whatsapp } from '../../data'

const StyledA = styled.a`
  color: transparent;
  cursor: pointer;
`

const StyledWhatsappIcon = styled(WhatsappIcon)`
  margin-left: 10px;

  &:hover {
    fill: ${orange}
  }
`

const StyledFacebookIcon = styled(FacebookIcon)`
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
    <StyledA href={facebook}>
      <StyledFacebookIcon {...props} />
    </StyledA>
    <StyledA href={whatsapp}>
      <StyledWhatsappIcon {...props} />
    </StyledA>
  </Wrapper>
)