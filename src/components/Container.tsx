import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <ContainerWrap>{children}</ContainerWrap>;
};

const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: ${rem(1170)};
  padding: 0 ${rem(30)};
  margin: 0 auto;
  box-sizing: content-box;
`;

export default Container;
