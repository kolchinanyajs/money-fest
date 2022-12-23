import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

type Props = {
  count?: string;
  description?: string;
};

const Statistic = ({ count, description }: Props) => {
  return (
    <StatisticWrap>
      <StatisticCount>{count}</StatisticCount>
      <StatisticDescription>{description}</StatisticDescription>
    </StatisticWrap>
  );
};

const StatisticWrap = styled.div``;

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
  line-height: 133%;
  // TODO: в theme
  color: #717171;
  white-space: pre-wrap;
`;

export default Statistic;
