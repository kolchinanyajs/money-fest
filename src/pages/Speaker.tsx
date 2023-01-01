import React from "react";
import styled from "styled-components";
import Container from "src/components/Container";

type Props = {};

const Speaker = (props: Props) => {
  return (
    <SpeakerWrap>
      <Container>Speaker</Container>
    </SpeakerWrap>
  );
};

const SpeakerWrap = styled.div``;

export default Speaker;
