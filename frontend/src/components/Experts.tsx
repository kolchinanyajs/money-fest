import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";
import { H2Wrap } from "./H2";
import Expert from "./Expert";

type Props = {};

const Experts = (props: Props) => {
  const [expertItems, setExpertItems] = useState([]);

  useEffect(() => {
    fetch("db/db.json")
      .then((response) => response.json())
      .then((json) => setExpertItems(json["expertItems"]));
  }, []);

  return (
    <ExpertsWrap>
      <Container>
        <ExpertsTitle>Эксперты школы</ExpertsTitle>
        <ExpertsInner>
          {expertItems.map(({ img, title, description }, index) => (
            <Expert
              img={img}
              title={title}
              description={description}
              key={index}
            />
          ))}
        </ExpertsInner>
      </Container>
    </ExpertsWrap>
  );
};

const ExpertsWrap = styled.div`
  margin-bottom: ${rem(140)};
`;

const ExpertsTitle = styled(H2Wrap)`
  margin-bottom: ${rem(38)};
`;
const ExpertsInner = styled.div`
  display: grid;
  gap: ${rem(30)};
  grid-template-columns: repeat(auto-fit, minmax(${rem(270)}, auto));
`;

export default Experts;
