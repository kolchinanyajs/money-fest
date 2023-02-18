import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";
import { H2Wrap } from "./H2";

const About = () => {
  return (
    <AboutWrap>
      <Container>
        <AboutTitle>Ученики про нас</AboutTitle>
        <AboutItems>
          <AboutItem>
            <AboutItemHeader>
              <AboutItemPhoto src={`./images/about-person-1.png`} />
              <AboutItemText>
                <AboutItemName>Альберт</AboutItemName>
                <AboutItemDate>12 марта 2021</AboutItemDate>
              </AboutItemText>
            </AboutItemHeader>
            <AboutItemContent>
              <AboutVideoWrap>
                <AboutVideo
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/z8WJZLG0ZeA?start=1&controls=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></AboutVideo>
                <AboutVideoCover></AboutVideoCover>
              </AboutVideoWrap>
            </AboutItemContent>
          </AboutItem>
          <AboutItem>
            <AboutItemHeader>
              <AboutItemPhoto src={`./images/about-person-1.png`} />
              <AboutItemText>
                <AboutItemName>Альберт</AboutItemName>
                <AboutItemDate>12 марта 2021</AboutItemDate>
              </AboutItemText>
            </AboutItemHeader>
            <AboutItemContent>
              Дмитрий, спасибо Вам за уроки))) Вы обьясняете доступно и понятно
              каждую тему. Во многом, благодаря Вам, хочется и дальше
              развиваться в данном направлении. Спасибо за те знания, которые Вы
              вкладываете в своих учеников. Спасибо за те знания, которые Вы
              вкладываете в своих учеников. Спасибо за те знания, которые Вы
              вкладываете в своих учеников.
            </AboutItemContent>
          </AboutItem>
          <AboutItem>
            <AboutItemHeader>
              <AboutItemPhoto src={`./images/about-person-1.png`} />
              <AboutItemText>
                <AboutItemName>Альберт</AboutItemName>
                <AboutItemDate>12 марта 2021</AboutItemDate>
              </AboutItemText>
            </AboutItemHeader>
            <AboutItemContent>
              Дмитрий, спасибо Вам за уроки. Вы обьясняете доступно и понятно
              каждую тему. Во многом, благодаря Вам, хочется и дальше
              развиваться в данном направлении. Спасибо за те знания, которые Вы
              вкладываете в своих учеников.
            </AboutItemContent>
          </AboutItem>
          <AboutItem>
            <AboutItemHeader>
              <AboutItemPhoto src={`./images/about-person-1.png`} />
              <AboutItemText>
                <AboutItemName>Альберт</AboutItemName>
                <AboutItemDate>12 марта 2021</AboutItemDate>
              </AboutItemText>
            </AboutItemHeader>
            <AboutItemContent>
              <AboutVideoWrap>
                <AboutVideo
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/z8WJZLG0ZeA?start=1&controls=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></AboutVideo>
                <AboutVideoCover></AboutVideoCover>
              </AboutVideoWrap>
            </AboutItemContent>
          </AboutItem>
          <AboutItem>
            <AboutItemHeader>
              <AboutItemPhoto src={`./images/about-person-1.png`} />
              <AboutItemText>
                <AboutItemName>Альберт</AboutItemName>
                <AboutItemDate>12 марта 2021</AboutItemDate>
              </AboutItemText>
            </AboutItemHeader>
            <AboutItemContent>
              Это лучшая школа по обучению криптовалюте, которую я знаю.
              Пробовал другие, не впечатлило.
            </AboutItemContent>
          </AboutItem>
          <AboutItem>
            <AboutItemHeader>
              <AboutItemPhoto src={`./images/about-person-1.png`} />
              <AboutItemText>
                <AboutItemName>Альберт</AboutItemName>
                <AboutItemDate>12 марта 2021</AboutItemDate>
              </AboutItemText>
            </AboutItemHeader>
            <AboutItemContent>
              <AboutVideoWrap>
                <AboutVideo
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/z8WJZLG0ZeA?start=1&controls=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></AboutVideo>
                <AboutVideoCover></AboutVideoCover>
              </AboutVideoWrap>
            </AboutItemContent>
          </AboutItem>
        </AboutItems>
      </Container>
    </AboutWrap>
  );
};

const AboutWrap = styled.section`
  margin-bottom: ${rem(140)};
`;

const AboutTitle = styled(H2Wrap)`
  margin-bottom: ${rem(42)};
`;

const AboutItems = styled.div`
  column-count: 3;
  gap: ${rem(30)};
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    column-count: 1;
  }
`;

const AboutItem = styled.div`
  padding: ${rem(22)} ${rem(24)};
  margin-bottom: ${rem(30)};
  background: ${(props) => props.theme.colors.bgGrey};
  border-radius: ${rem(24)};
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 10px;
  break-inside: avoid;
`;

const AboutItemHeader = styled.header`
  display: flex;
  align-items: center;
  column-gap: ${rem(13)};
  margin-bottom: ${rem(18)};
`;

const AboutItemPhoto = styled.img`
  width: ${rem(56)};
  height: ${rem(56)};
`;

const AboutItemText = styled.div``;

const AboutItemName = styled.div`
  font-weight: 500;
  font-size: ${rem(18)};
  line-height: ${rem(25)};
  color: ${(props) => props.theme.colors.black};
`;

const AboutItemDate = styled.div`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: ${rem(22)};
  color: ${(props) => props.theme.colors.secondary};
`;

const AboutItemContent = styled.div`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: ${rem(24)};
  color: ${(props) => props.theme.colors.black};
`;

const AboutVideoWrap = styled.div`
  position: relative;
  border-radius: ${rem(8)};
  overflow: hidden;
`;

const AboutVideoCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("./images/video-about-cover.png") no-repeat center center;
  background-size: cover;
  opacity: 1;
  z-index: 2;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${rem(48)};
    height: ${rem(48)};
    background: url("./images/video-play.svg") no-repeat center center;
  }
`;

const AboutVideo = styled.iframe`
  border: none;
  width: 100%;
  height: ${rem(415)};
  aspect-ration: 322 / 415;
  position: relative;
  z-index: 1;
`;

export default About;
