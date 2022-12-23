import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Container from './Container';

type Props = {};

const Slider = (props: Props) => {
  return (
    <BannerWrap>
      <Container>
        <BannerInner></BannerInner>
      </Container>
    </BannerWrap>
  );
};

const BannerWrap = styled.div`
  // TODO: временно
  margin-bottom: ${rem(175)};
`;

const BannerInner = styled.div`
  // TODO: временно
  background: #f7f7f7;
  border-radius: ${rem(48)};
  height: ${rem(568)};
`;

export default Slider;
