import React from "react";
import styled from "styled-components";
import { rem } from "polished";

type Props = {
  children?: React.ReactNode;
  dark?: boolean;
  big?: boolean;
};

const Button = ({ children, dark, big }: Props) => {
  return (
    <ButtonWrap $dark={dark} $big={big}>
      {children}
    </ButtonWrap>
  );
};

const ButtonWrap = styled.button<{ $dark?: boolean; $big?: boolean }>`
  padding: ${(props) =>
    props.$big ? `${rem(21)} ${rem(42)}` : `${rem(14)} ${rem(32)}`};
  background: ${(props) =>
    props.$dark ? props.theme.colors.black : props.theme.colors.yellow};
  border-radius: ${rem(16)};
  font-weight: 500;
  font-size: ${(props) => (props.$big ? `${rem(16)}` : `${rem(14)}`)};
  line-height: ${rem(19)};
  color: ${(props) =>
    props.$dark ? props.theme.colors.white : props.theme.colors.black};
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

export default Button;
