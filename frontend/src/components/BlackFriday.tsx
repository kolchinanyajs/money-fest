import React from "react";
import styled from "styled-components";
import { rem } from "polished";

type Props = {};

const BlackFriday = (props: Props) => {
  return (
    <BlackFridayWrap>
      <BlackFridayInner>–30% на все курсы</BlackFridayInner>
      <BlackFridayClose />
    </BlackFridayWrap>
  );
};

const BlackFridayWrap = styled.div`
  position: relative;
  background: ${(props) => props.theme.colors.black}
    url("./images/black-friday.png") no-repeat 70% center;
  background-size: cover;
  margin-bottom: ${rem(33)};
`;

const BlackFridayInner = styled.div`
  height: ${rem(70)};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
  font-size: ${rem(24)};
  line-height: 133%;
  padding-right: 19.5%;
`;

const BlackFridayClose = styled.button`
  position: absolute;
  top: 50%;
  right: ${rem(39)};
  transform: translateY(-50%);
  width: ${rem(33)};
  height: ${rem(33)};
  border-radius: 50%;
  // TODO: в theme
  // TODO: в svg
  background: #f7f7f7
    url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.00008 7.41421L1.70718 11.7071L0.292969 10.2929L4.58586 6L0.292969 1.70711L1.70718 0.292893L6.00008 4.58579L10.293 0.292893L11.7072 1.70711L7.41429 6L11.7072 10.2929L10.293 11.7071L6.00008 7.41421Z' fill='black'/%3E%3C/svg%3E%0A")
    no-repeat center center;
  background-size: ${rem(12)} ${rem(12)};
  cursor: pointer;
`;

export default BlackFriday;
