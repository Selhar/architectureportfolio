import React from 'react'
import styled from 'styled-components'

import Splash from './'

export default {
  title: 'Splash'
}

const Wrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`

export const Basic = () => <Wrapper><Splash /></Wrapper>