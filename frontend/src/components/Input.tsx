import React from "react";
import styled from "styled-components";
import { rem } from "polished";

type Props = {
  placeholder?: string;
};

const Input = ({ placeholder }: Props) => {
  return <InputWrap placeholder={placeholder} />;
};

const InputWrap = styled.input`
  width: 100%;
  height: ${rem(56)};
  border-radius: ${rem(15)};
  border: 1px solid transparent;
  outline: none;
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: 112%;
  padding: 0 ${rem(21)};
  &:focus {
    border-color: ${(props) => props.theme.colors.black};
  }
  &::placeholder {
    color: #717171;
  }
`;

export default Input;
