import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { Link } from "react-router-dom";

type Props = {
  color?: string;
};

const Logo = ({ color = "black" }: Props) => {
  return <LogoWrap color={color} to="/" />;
};

export const LogoWrap = styled(Link)`
  display: block;
  width: ${rem(140)};
  height: ${rem(37)};
  background: ${(props) =>
    `url("./images/logo-${props.color}.svg") no-repeat center center`};
  background-size: cover;
`;

export default Logo;
