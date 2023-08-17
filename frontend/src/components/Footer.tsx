import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";
import Socials from "./Socials";
import { LogoWrap } from "./Logo";
import ArrowTop from "./ArrowTop";

type Props = {};

const Footer = (props: Props) => {
  return (
    <FooterWrap>
      <Container>
        <ArrowTop />
        <FooterInner>
          <FooterTop>
            <FooterItem>
              <FooterLogo color="white" to="/" />
              <Socials />
            </FooterItem>
            <FooterItem>
              <FooterTitle>Все курсы</FooterTitle>
              <FooterText>Криптоинвестиции: успешный старт</FooterText>
              <FooterText>
                Мастерская трейдинга: практика и заработок
              </FooterText>
              <FooterText>Индивидуальное сопровождение эксперта</FooterText>
            </FooterItem>
            <FooterItem $custom={true}>
              <FooterSubText>Главная</FooterSubText>
              <FooterSubText>Курсы</FooterSubText>
              <FooterSubText>Эксперты</FooterSubText>
            </FooterItem>
          </FooterTop>
          <FooterBottom>
            <FooterBottomTitle href="#">ООО «Манифест»</FooterBottomTitle>
            <FooterBottomTitle href="#">
              Политика конфиденциальности
            </FooterBottomTitle>
            <FooterBottomTitle href="#">Договор–оферта</FooterBottomTitle>
          </FooterBottom>
        </FooterInner>
      </Container>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  position: relative;
  margin-top: auto;
  padding-bottom: ${rem(146)};
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
`;

const FooterInner = styled.div`
  padding-top: ${rem(37)};
`;

const FooterTop = styled.div`
  display: flex;
  gap: ${rem(30)};
  border-bottom: 1px solid currentColor;
  padding-bottom: ${rem(81)};
`;

const FooterItem = styled.div<{ $custom?: boolean }>`
  padding-top: ${(props) => (props.$custom ? rem(45) : rem(0))};
  &:first-child {
    width: calc(370 / 1170 * 100%);
  }
  &:nth-child(2) {
    width: calc(470 / 1170 * 100%);
  }
  &:last-child {
    width: calc(270 / 1170 * 100%);
  }
`;

const FooterLogo = styled(LogoWrap)`
  margin-bottom: ${rem(54)};
`;

const FooterTitle = styled.h6`
  font-weight: 700;
  font-size: ${rem(18)};
  line-height: ${rem(25)};
  text-transform: uppercase;
  margin-bottom: ${rem(20)};
`;

const FooterText = styled.p`
  font-weight: 400;
  font-size: ${rem(18)};
  line-height: ${rem(25)};
  margin-bottom: ${rem(12)};
  &:last-child {
    margin-bottom: 0;
  }
`;

const FooterSubText = styled.p`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: ${rem(22)};
  margin-bottom: ${rem(15)};
  &:last-child {
    margin-bottom: 0;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  gap: ${rem(30)};
  padding-top: ${rem(37)};
`;

const FooterBottomTitle = styled.a`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: 138%;
  color: ${(props) => props.theme.colors.grey};
  &:first-child {
    width: calc(370 / 1170 * 100%);
  }
  &:nth-child(2) {
    width: calc(470 / 1170 * 100%);
  }
  &:last-child {
    width: calc(270 / 1170 * 100%);
  }
`;

export default Footer;
