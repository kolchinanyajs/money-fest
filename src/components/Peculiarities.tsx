import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";

type Props = {};

const Peculiarities = (props: Props) => {
  const [peculiaritiesItem, setPeculiaritiesItem] = useState([]);

  useEffect(() => {
    fetch("db/db.json")
      .then((response) => response.json())
      .then((json) => setPeculiaritiesItem(json["peculiaritiesCrypto"]));
  }, []);

  return (
    <PeculiaritiesWrap>
      <Container>
        <PeculiaritiesInner>
          {peculiaritiesItem.map(({ title, text }) => (
            <PeculiaritiesItem>
              <PeculiaritiesTitle>{title}</PeculiaritiesTitle>
              <PeculiaritiesText>{text}</PeculiaritiesText>
            </PeculiaritiesItem>
          ))}
        </PeculiaritiesInner>
      </Container>
    </PeculiaritiesWrap>
  );
};

const PeculiaritiesWrap = styled.div`
  margin-bottom: ${rem(140)};
`;

const PeculiaritiesInner = styled.div`
  display: grid;
  gap: ${rem(30)};
  grid-template-columns: repeat(auto-fit, minmax(${rem(270)}, auto));
`;

const PeculiaritiesItem = styled.div``;

// TODO: изменить тег
const PeculiaritiesTitle = styled.div`
  font-weight: 700;
  font-size: ${rem(36)};
  line-height: 106%;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${rem(11)};
`;

const PeculiaritiesText = styled.p`
  font-weight: 400;
  font-size: ${rem(18)};
  line-height: 133%;
  color: ${(props) => props.theme.colors.secondary};
`;

export default Peculiarities;
