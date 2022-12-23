import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Container from './Container';
import { H2Wrap } from './H2';
import Video from './Video';
import Step from './Step';

const How = () => {
  const [stepItems, setStepItems] = useState([]);

  useEffect(() => {
    fetch('db/db.json')
      .then((response) => response.json())
      .then((json) => setStepItems(json['stepItems']));
  }, []);

  return (
    <HowWrap>
      <Container>
        <HowTitle>Как проходит обучение</HowTitle>
        <Video />
        <HowSteps>
          {stepItems.map(({ title, description }, index) => (
            <Step title={title} description={description} id={index + 1} key={index} />
          ))}
        </HowSteps>
      </Container>
    </HowWrap>
  );
};

const HowWrap = styled.div`
  margin-bottom: ${rem(164)};
`;

const HowTitle = styled(H2Wrap)`
  margin-bottom: ${rem(42)};
`;

const HowSteps = styled.div`
  display: grid;
  gap: ${rem(30)};
  grid-template-columns: repeat(auto-fit, minmax(${rem(270)}, auto));
`;

export default How;
