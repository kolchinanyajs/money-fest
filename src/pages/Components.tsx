import React from 'react';
import styled from 'styled-components';
import Container from 'src/components/Container';

type Props = {};

const Components = (props: Props) => {
  return (
    <ComponentsWrap>
      <Container>Components</Container>
    </ComponentsWrap>
  );
};

const ComponentsWrap = styled.div``;

export default Components;
