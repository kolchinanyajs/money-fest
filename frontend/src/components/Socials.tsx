import React from "react";
import styled from "styled-components";
import { rem } from "polished";

type Props = {
  icon?: string;
};

const Socials = (props: Props) => {
  const icons = ["vk", "youtube", "tg"];

  return (
    <SocialsWrap>
      {icons.map((icon, index) => (
        <SocialsLink icon={icon} key={index} href="#" />
      ))}
    </SocialsWrap>
  );
};

const SocialsWrap = styled.div`
  display: flex;
  gap: ${rem(30)};
`;

const SocialsLink = styled.a<{ icon?: string }>`
  width: ${rem(32)};
  height: ${rem(32)};
  background: ${(props) =>
    `url("./images/${props.icon}.svg") no-repeat center center`};
  background-size: cover;
`;

export default Socials;
