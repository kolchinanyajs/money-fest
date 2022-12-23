import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Input from './Input';
import Button from './Button';

type Props = {};

const Questions = (props: Props) => {
  return (
    <QuestionsContainer>
      <QuestionsWrap>
        <QuestionsText>
          <QuestionsTitle>Есть вопросы? Сейчас&nbsp;ответим</QuestionsTitle>
          <QuestionsDescription>Оставьте свои контакты</QuestionsDescription>
        </QuestionsText>
        <QuestionsForm>
          <QuestionsInputs>
            <QuestionsField>
              <QuestionsInput placeholder="Имя" />
            </QuestionsField>
            <QuestionsField>
              <QuestionsInput placeholder="Телефон" />
            </QuestionsField>
            <QuestionsField>
              <QuestionsInput placeholder="Email" />
            </QuestionsField>
          </QuestionsInputs>
          <QuestionsActions>
            <QuestionsActionsInfo>
              Нажимая «Отправить», соглашаюсь&nbsp;с{' '}
              <QuestionsActionsLink href="#">правилами</QuestionsActionsLink>
            </QuestionsActionsInfo>
            <QuestionsActionsButton dark big>
              Отправить
            </QuestionsActionsButton>
          </QuestionsActions>
        </QuestionsForm>
      </QuestionsWrap>
    </QuestionsContainer>
  );
};

const QuestionsContainer = styled.div`
  padding: 0 ${rem(30)};
`;

const QuestionsWrap = styled.div`
  display: flex;
  gap: ${rem(30)};
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: ${rem(1030)};
  width: 100%;
  margin: 0 auto;
  min-height: ${rem(346)};
  border-radius: ${rem(32)};
  background: ${(props) => props.theme.colors.yellow};
  margin-bottom: ${rem(192)};
  padding: ${rem(64)} ${rem(76)};
`;

const QuestionsText = styled.div`
  max-width: 290px;
  @media (max-width: 955px) {
    max-width: 100%;
  }
`;

const QuestionsTitle = styled.h3`
  font-weight: 700;
  font-size: ${rem(36)};
  line-height: 111%;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${rem(17)};
`;

const QuestionsDescription = styled.p`
  font-weight: 400;
  font-size: ${rem(22)};
  line-height: 127%;
  color: ${(props) => props.theme.colors.black};
`;

const QuestionsForm = styled.form`
  max-width: 424px;
  width: 100%;
  @media (max-width: 955px) {
    flex-grow: 1;
    max-width: 100%;
  }
`;

const QuestionsInput = styled(Input)``;

const QuestionsInputs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${rem(18)} ${rem(26)};
  margin-bottom: ${rem(24)};
`;

const QuestionsField = styled.div`
  &:first-child {
    grid-column: 3/1;
  }
`;

const QuestionsActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${rem(30)};
`;

const QuestionsActionsInfo = styled.p`
  font-weight: 400;
  font-size: ${rem(14)};
  line-height: 114%;
`;

const QuestionsActionsButton = styled(Button)``;

const QuestionsActionsLink = styled.a`
  text-decoration: underline;
  color: ${(props) => props.theme.colors.black};
`;

export default Questions;
