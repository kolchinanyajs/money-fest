import React from "react";
import styled from "styled-components";
import { rem } from "polished";

type Props = {
  img: string;
  title: string;
  description: string;
};

const Expert = ({ img, title, description }: Props) => {
  return (
    <ExpertWrap>
      <ExpertImgBox>
        <ExpertImg src={`images/${img}.png`} />
      </ExpertImgBox>
      <ExpertTitle>{title}</ExpertTitle>
      <ExpertDescription>{description}</ExpertDescription>
    </ExpertWrap>
  );
};

const ExpertWrap = styled.div``;

const ExpertImgBox = styled.div`
  border-radius: ${rem(24)};
  margin-bottom: ${rem(19)};
  overflow: hidden;
`;

const ExpertImg = styled.img`
  width: 100%;
`;

const ExpertTitle = styled.div`
  font-weight: 700;
  font-size: ${rem(24)};
  line-height: 117%;
  margin-bottom: ${rem(12)};
`;

const ExpertDescription = styled.p`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: 150%;
  color: #717171;
`;

export default Expert;
