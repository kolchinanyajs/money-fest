import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";
import Statistic from "./Statistic";

type Props = {};

const Statistics = (props: Props) => {
  const [statisticsItems, setStatisticsItems] = useState([]);

  useEffect(() => {
    fetch("db/db.json")
      .then((response) => response.json())
      .then((json) => setStatisticsItems(json["statisticsItems"]));
  }, []);

  return (
    <StatisticsWrap>
      <Container>
        <StatisticsInner>
          {statisticsItems.map(({ count, description }, index) => (
            <Statistic count={count} description={description} key={index} />
          ))}
        </StatisticsInner>
      </Container>
    </StatisticsWrap>
  );
};

const StatisticsWrap = styled.div`
  margin-bottom: ${rem(140)};
`;

const StatisticsInner = styled.div`
  display: grid;
  gap: ${rem(30)};
  grid-template-columns: repeat(auto-fit, minmax(${rem(270)}, auto));
`;

export default Statistics;
