import React from "react";
import styled from "styled-components";
import { rem } from "polished";

type Props = {
  img: string;
  title: string;
  description: string;
};

const ChangeLifeCard = ({ img, title, description }: Props) => {
  return (
    <ChangeLifeCardWrap>
      <ChangeLifeCardImgBox>
        <ChangeLifeCardImg src={`./images/${img}.png`} alt={"img"} />
      </ChangeLifeCardImgBox>
      <ChangeLifeCardText>
        <ChangeLifeCardTitle>{title}</ChangeLifeCardTitle>
        <ChangeLifeCardDescription>{description}</ChangeLifeCardDescription>
      </ChangeLifeCardText>
    </ChangeLifeCardWrap>
  );
};

const ChangeLifeCardWrap = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: ${rem(24)};
  overflow: hidden;
  min-height: ${rem(532)};
`;

const ChangeLifeCardImgBox = styled.div`
  height: ${rem(280)};
  overflow: hidden;
`;

const ChangeLifeCardImg = styled.img`
  width: 100%;
`;

const ChangeLifeCardText = styled.div`
  padding: ${rem(16)} ${rem(30)};
  background: #f7f7f7;
  flex-grow: 1;
`;

const ChangeLifeCardTitle = styled.h3`
  font-size: ${rem(24)};
  line-height: 125%;
  font-weight: 700;
  margin-bottom: ${rem(12)};
`;

const ChangeLifeCardDescription = styled.p`
  font-weight: 400;
  font-size: ${rem(18)};
  line-height: 133%;
  color: #717171;
`;

export default ChangeLifeCard;
