import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";

type Props = {};

const Banner = (props: Props) => {
  return (
    <BannerContainer>
      <BannerWrap>
        <Container>
          <BannerInner></BannerInner>
        </Container>
      </BannerWrap>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  padding: 0 ${rem(30)};
`;

const BannerWrap = styled.div`
  max-width: ${rem(1390)};
  width: 100%;
  margin: 0 auto;
  min-height: ${rem(568)};
  background: ${(props) => props.theme.colors.yellow};
  border-radius: ${rem(32)};
  /* TODO: временно */
  margin-bottom: ${rem(140)};
`;

const BannerInner = styled.div``;

export default Banner;
