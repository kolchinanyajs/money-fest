import React from "react";
import styled from "styled-components";
import Container from "src/components/Container";

type Props = {};

const Story = (props: Props) => {
  return (
    <StoryWrap>
      <Container>Story</Container>
    </StoryWrap>
  );
};

const StoryWrap = styled.div``;

export default Story;
