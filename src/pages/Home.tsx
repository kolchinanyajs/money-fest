import React from "react";
import styled from "styled-components";
import Slider from "src/components/Slider";
import Statistics from "src/components/Statistics";
import Courses from "src/components/Courses";
import How from "src/components/How";
import Experts from "src/components/Experts";
import ChangeLife from "src/components/ChangeLife";
import Questions from "src/components/Questions";
// import About from "src/components/About";

const Home = () => {
  return (
    <HomeWrap>
      <Slider />
      <Statistics />
      <Courses />
      <How />
      <Experts />
      {/* <About /> */}
      <ChangeLife />
      <Questions />
    </HomeWrap>
  );
};

const HomeWrap = styled.div``;

export default Home;
