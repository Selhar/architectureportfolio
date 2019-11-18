import React from "react";
import styled from "styled-components";
import { grey } from "../../colors";

const Div = styled.div`
  margin: 110px 0 50px 0;
  padding: 20px 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-top: 1px solid ${grey};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export default () => (
  <Div>
    <Wrapper>
      <p>+55 (71) 9 9901-9845</p>
    </Wrapper>
    <Wrapper>
      <p>thaisacramento@yahoo.com</p>
    </Wrapper>
  </Div>
);
