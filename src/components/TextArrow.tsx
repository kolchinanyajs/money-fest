import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

type Props = {
  text: string;
};

const TextArrow = ({ text }: Props) => {
  return (
    <TextArrowWrap>
      <TextArrowText>{text}</TextArrowText>
      <TextArrowIcon />
    </TextArrowWrap>
  );
};

export const TextArrowWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(13)};
`;

const TextArrowText = styled.p`
  font-weight: 500;
  font-size: ${rem(18)};
  line-height: 100%;
  color: ${(props) => props.theme.colors.black};
`;

const TextArrowIcon = styled.i`
  position: relative;
  top: ${rem(2)};
  width: ${rem(21)};
  height: ${rem(21)};
  background: url('./images/icon-arrow.svg') no-repeat center center;
`;

export default TextArrow;
