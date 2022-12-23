import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Container from './Container';
import { H2Wrap } from './H2';

interface Props {
  teachItems: {
    title: string;
    description: string;
  }[];
}

const Teach = ({ teachItems }: Props) => {
  return (
    <TeachWrap>
      <Container>
        <TeachMainTitle>Чему научим</TeachMainTitle>
        <TeachItems>
          {teachItems.map(({ title, description }, index) => (
            <TeachItem key={index}>
              <TeachItemNumber>{index + 1}</TeachItemNumber>
              <TeachItemText>
                <TeachItemTitle>{title}</TeachItemTitle>
                <TeachItemDescription>{description}</TeachItemDescription>
              </TeachItemText>
            </TeachItem>
          ))}
        </TeachItems>
      </Container>
    </TeachWrap>
  );
};

const TeachWrap = styled.section`
  margin-bottom: ${rem(140)};
`;

const TeachMainTitle = styled(H2Wrap)`
  margin-bottom: ${rem(35)};
`;

const TeachItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${rem(370)}, 1fr));
  gap: ${rem(30)};
`;

const TeachItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(30)};
  min-height: ${rem(308)};
  background: ${(props) => props.theme.colors.bgGrey};
  border-radius: ${rem(24)};
`;

const TeachItemNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${rem(40)};
  height: ${rem(40)};
  border-radius: 50%;
  background: ${(props) => props.theme.colors.yellow};
  font-size: ${rem(22)};
  line-height: ${rem(30)};
  text-align: center;
  color: ${(props) => props.theme.colors.black};
`;

const TeachItemText = styled.div`
  margin-top: auto;
`;

const TeachItemTitle = styled.div`
  font-weight: 500;
  font-size: ${rem(28)};
  line-height: 114%;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${rem(12)};
`;

const TeachItemDescription = styled.p`
  font-weight: 400;
  font-size: ${rem(18)};
  line-height: 133%;
  color: ${(props) => props.theme.colors.secondary};
`;

export default Teach;
