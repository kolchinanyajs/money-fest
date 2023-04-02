import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";
import { H2Wrap } from "./H2";

type Props = {};

const ForYou = (props: Props) => {
  const [forYouItem, setForYouItem] = useState([]);

  useEffect(() => {
    fetch("db/db.json")
      .then((response) => response.json())
      .then((json) => setForYouItem(json["forYou"]));
  }, []);
  return (
    <ForYouWrap>
      <Container>
        <ForYouMainTitle>Этот курс для вас, если вы</ForYouMainTitle>
        <ForYouInner>
          {forYouItem.map(({ icon, title, text }) => (
            <ForYouItem>
              <ForYouIcon src={`./images/icon-for-you-${icon}.svg`} />
              <ForYouTitle>{title}</ForYouTitle>
              <ForYouText>{text}</ForYouText>
            </ForYouItem>
          ))}
        </ForYouInner>
      </Container>
    </ForYouWrap>
  );
};

const ForYouMainTitle = styled(H2Wrap)`
  margin-bottom: ${rem(68)};
`;

const ForYouWrap = styled.div`
  margin-bottom: ${rem(140)};
`;

const ForYouInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${rem(90)} ${rem(30)};
  max-width: ${rem(970)};
  width: 100%;
`;

const ForYouItem = styled.div`
  width: ${rem(370)};
  @media (max-width: 829px) {
    width: 100%;
  }
`;

const ForYouIcon = styled.img`
  margin-bottom: ${rem(20)};
`;

// TODO: изменить тег
const ForYouTitle = styled.div`
  font-weight: 700;
  font-size: ${rem(36)};
  line-height: 106%;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${rem(12)};
`;

const ForYouText = styled.p`
  font-weight: 400;
  font-size: ${rem(18)};
  line-height: 133%;
  color: ${(props) => props.theme.colors.secondary};
`;

export default ForYou;
