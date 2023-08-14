import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";
import Statistic from "./Statistic";

const Statistics = () => {
  const [statisticsItems, setStatisticsItems] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}statistics`)
      .then((response) => response.json())
      .then(({ data }) => setStatisticsItems(data));
  }, []);

  return (
    <StatisticsWrap>
      <Container>
        <StatisticsInner>
          {statisticsItems.map(
            ({ attributes: { count, description } }, index) => (
              <Statistic count={count} description={description} key={index} />
            )
          )}
        </StatisticsInner>
      </Container>
    </StatisticsWrap>
  );
};

const StatisticsWrap = styled.div`
  margin-bottom: ${rem(140)};
`;

const StatisticsInner = styled.ul`
  display: grid;
  gap: ${rem(30)};
  grid-template-columns: repeat(auto-fit, minmax(${rem(270)}, auto));
`;

export default Statistics;
