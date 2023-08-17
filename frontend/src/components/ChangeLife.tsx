import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";
import { H2Wrap } from "./H2";
import ChangeLifeCard from "./ChangeLifeCard";
import { Link } from "react-router-dom";

type Props = {};

const ChangeLife = (props: Props) => {
  const [changeLifeItems, setChangeLifeItems] = useState([]);

  useEffect(() => {
    fetch("db/db.json")
      .then((response) => response.json())
      .then((json) => setChangeLifeItems(json["changeLifeItems"]));
  }, []);

  return (
    <ChangeLifeWrap>
      <Container>
        <ChangeLifeHeader>
          <ChangeLifeTitle>
            Ученики, поменявшие жизнь{" "}
            <ChangeLifeTitleSpan>благодаря нашей школе</ChangeLifeTitleSpan>
          </ChangeLifeTitle>
          <ChangeLifeLink to={"#"}>Поделиться историей</ChangeLifeLink>
        </ChangeLifeHeader>
        <ChangeLifeCards>
          {changeLifeItems.map(({ img, title, description }, index) => (
            <ChangeLifeCard
              img={img}
              title={title}
              description={description}
              key={index}
            />
          ))}
        </ChangeLifeCards>
      </Container>
    </ChangeLifeWrap>
  );
};

const ChangeLifeWrap = styled.section`
  margin-bottom: ${rem(140)};
`;

const ChangeLifeHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  gap: ${rem(40)};
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: ${rem(48)};
`;

const ChangeLifeTitle = styled(H2Wrap)`
  max-width: ${rem(697)};
`;

const ChangeLifeTitleSpan = styled.span`
  color: ${(props) => props.theme.colors.secondary};
`;

const ChangeLifeLink = styled(Link)`
  font-size: ${rem(16)};
  line-height: 150%;
  color: #125ef0;
`;

const ChangeLifeCards = styled.section`
  display: grid;
  gap: ${rem(30)};
  grid-template-columns: repeat(auto-fit, minmax(${rem(370)}, auto));
`;

export default ChangeLife;
