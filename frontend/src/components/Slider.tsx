import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Button from "./Button";

import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <BannerWrap>
      <Container>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <Slide>
              <SlideContent>
                <SlideTitle>
                  Учим зарабатывать на&nbsp;криптовалюте с&nbsp;нуля
                </SlideTitle>
                <SlideSubTitle>
                  Онлайн-школа <br /> и профессиональное сообщество
                </SlideSubTitle>
                <Button big>Выбрать курс</Button>
              </SlideContent>
              <SlideImageWrap>
                <SlideImage src={require("../images/slide-1.png")} />
              </SlideImageWrap>
            </Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide>Slide 1</Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide>Slide 1</Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide>Slide 1</Slide>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button swiper-button-next"></div>
        <div className="swiper-button swiper-button-prev"></div>
      </Container>
    </BannerWrap>
  );
};

const BannerWrap = styled.div`
  margin-bottom: ${rem(175)};
`;

const Slide = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  background: ${(props) => props.theme.colors.bgGrey};
  border-radius: ${rem(48)};
  min-height: ${rem(568)};
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
    border-radius: ${rem(24)};
    padding: ${rem(8)};
    min-height: 100%;
  }
`;

const SlideContent = styled.div`
  position: relative;
  top: ${rem(2)};
  z-index: 1;
  padding-left: calc(70 / 1170 * 100%);
  align-self: center;
  box-sizing: border-box;
  max-width: ${rem(512)};
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding-left: 0;
    max-width: 100%;
  }
`;

const SlideImageWrap = styled.div`
  position: absolute;
  left: calc(553 / 1170 * 100%);
  bottom: ${rem(-5)};
  max-width: ${rem(571)};
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    order: -1;
    max-width: 100%;
    position: static;
  }
`;

const SlideImage = styled.img`
  width: 100%;
`;

const SlideTitle = styled.p`
  font-weight: 700;
  font-size: ${rem(44)};
  line-height: 114%;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${rem(24)};
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: ${rem(26)};
    line-height: ${rem(28)};
    margin-bottom: ${rem(10)};
    padding-left: ${rem(16)};
  }
`;

const SlideSubTitle = styled.p`
  font-weight: 400;
  font-size: ${rem(22)};
  line-height: 136%;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${rem(57)};
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: ${rem(14)};
    line-height: ${rem(18)};
    margin-bottom: ${rem(31)};
    padding-left: ${rem(16)};
  }
`;

export default Slider;
