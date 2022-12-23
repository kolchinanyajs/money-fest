import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Container from 'src/components/Container';

type Props = {};

const Workshop = (props: Props) => {
  return (
    <WorkshopWrap>
      <Container>Workshop</Container>
    </WorkshopWrap>
  );
};

const WorkshopWrap = styled.div``;

export default Workshop;
