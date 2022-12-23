import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

type Props = {
  children: React.ReactNode;
};

const H2 = ({ children }: Props) => {
  return <H2Wrap>{children}</H2Wrap>;
};

export const H2Wrap = styled.h2`
  font-weight: 700;
  font-size: ${rem(48)};
  line-height: 108%;
`;

export default H2;
