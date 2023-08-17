import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import formattingJSON from "src/utils/formattingJSON";

type Props = {
  id: number;
  title: string;
  description: string;
};

const Step = ({ title, description, id }: Props) => {
  return (
    <StepWrap>
      <StepCount>{id}</StepCount>
      <StepLine />
      <StepTitle>{formattingJSON(title)}</StepTitle>
      <StepDescription>{description}</StepDescription>
    </StepWrap>
  );
};

const StepWrap = styled.div``;

const StepCount = styled.div`
  font-weight: 700;
  font-size: ${rem(48)};
  line-height: 117%;
  color: #fcc344;
  margin-bottom: ${rem(16)};
`;

const StepLine = styled.div`
  height: ${rem(1)};
  background: ${(props) => props.theme.colors.black};
  margin-bottom: ${rem(34)};
`;

const StepTitle = styled.div`
  font-weight: 400;
  font-size: ${rem(28)};
  line-height: 114%;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${rem(12)};
`;

const StepDescription = styled.p`
  font-weight: 400;
  font-size: ${rem(18)};
  line-height: 133%;
  color: #717171;
`;

export default Step;
