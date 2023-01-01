import React from "react";
import styled from "styled-components";
import Container from "src/components/Container";

type Props = {};

const Vip = (props: Props) => {
  return (
    <VipWrap>
      <Container>VipWrap</Container>
    </VipWrap>
  );
};

const VipWrap = styled.div``;

export default Vip;
