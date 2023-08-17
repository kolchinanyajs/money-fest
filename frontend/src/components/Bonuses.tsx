import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";
import { H2Wrap } from "./H2";

type Props = {};

const Bonuses = (props: Props) => {
  const [cryptoBonuses, setCryptoBonuses] = useState([]);

  useEffect(() => {
    fetch("db/db.json")
      .then((response) => response.json())
      .then((json) => setCryptoBonuses(json["cryptoBonuses"]));
  }, []);

  return (
    <BonusesWrap>
      <Container>
        <BonusesInner>
          <BonusesText>
            <BonusesTitle>Бонусы для каждого ученика</BonusesTitle>
            <BonusesDescription>
              То, что поможет погрузиться в тему с головой и начать зарабатывать
              прямо на курсе.
            </BonusesDescription>
          </BonusesText>
          <BonusesItems>
            {cryptoBonuses.map(({ title, description }) => (
              <BonusesItem>
                <BonusesItemTitle dangerouslySetInnerHTML={{ __html: title }} />
                <BonusesItemDescription>{description}</BonusesItemDescription>
              </BonusesItem>
            ))}
          </BonusesItems>
        </BonusesInner>
      </Container>
    </BonusesWrap>
  );
};

const BonusesWrap = styled.section`
  margin-bottom: ${rem(140)};
`;

const BonusesInner = styled.div`
  display: flex;
  gap: calc(230 / 1170 * 100%);
  @media (max-width: 1024px) {
    gap: calc(100 / 964 * 100%);
  }
  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
`;

const BonusesText = styled.div`
  @media (max-width: 960px) {
    margin-bottom: ${rem(44)};
  }
`;

const BonusesTitle = styled(H2Wrap)`
  margin-bottom: ${rem(24)};
`;

const BonusesDescription = styled.p`
  font-weight: 400;
  font-size: ${rem(22)};
  line-height: 127%;
  color: ${(props) => props.theme.colors.secondary};
`;

const BonusesItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${rem(30)};
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;

const BonusesItem = styled.div``;

const BonusesItemTitle = styled.div`
  font-weight: 500;
  font-size: ${rem(28)};
  line-height: 114%;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${rem(12)};
`;

const BonusesItemDescription = styled.p`
  font-weight: 400;
  font-size: ${rem(18)};
  line-height: 133%;
  color: ${(props) => props.theme.colors.secondary};
`;

export default Bonuses;
