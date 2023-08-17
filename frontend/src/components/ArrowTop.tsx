import React from "react";
import styled from "styled-components";
import { rem } from "polished";

type Props = {};

const ArrowTop = (props: Props) => {
  return <ArrowTopWrap />;
};

const ArrowTopWrap = styled.button`
  position: relative;
  top: ${rem(-32)};
  margin-left: auto;
  width: ${rem(64)};
  height: ${rem(64)};
  border-radius: 50%;
  background: ${(props) => props.theme.colors.yellow}
    url("./images/arrow-top.svg") no-repeat center center;
  background-size: ${rem(26)} ${rem(27)};
  cursor: pointer;
`;

export default ArrowTop;
