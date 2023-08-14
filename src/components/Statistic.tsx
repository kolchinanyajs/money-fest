import React from "react";
import styled from "styled-components";
import { rem } from "polished";

type Props = {
  count?: string;
  description?: string;
};

const Statistic = ({ count, description }: Props) => {
  return (
    <li>
      <StatisticCount>{count}</StatisticCount>
      <StatisticDescription>{description}</StatisticDescription>
    </li>
  );
};

const StatisticCount = styled.p`
  font-weight: 700;
  font-size: ${rem(36)};
  line-height: 106%;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${rem(11)};
`;

const StatisticDescription = styled.p`
  font-weight: 400;
  font-size: ${rem(18)};
  line-height: 1.33;
  color: ${(props) => props.theme.colors.secondary};
  white-space: pre-wrap;
`;

export default Statistic;
