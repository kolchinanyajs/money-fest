import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";
import { H2Wrap } from "./H2";
import Course, { CourseTitle } from "./Course";
import { Link } from "react-router-dom";
import TextArrow from "./TextArrow";

const Courses = () => {
  const [coursesItems, setCoursesItems] = useState([]);

  useEffect(() => {
    fetch("db/db.json")
      .then((response) => response.json())
      .then((json) => setCoursesItems(json["coursesItems"]));
  }, []);

  return (
    <CoursesWrap>
      <Container>
        <CoursesTitle>Курсы</CoursesTitle>
        <CoursesInner>
          {coursesItems.map(({ label, title, description, course }, index) => {
            return course ? (
              <Course
                label={label}
                title={title}
                description={description}
                id={index + 1}
                key={index}
              />
            ) : (
              <CoursesChoice to={"/"} key={index}>
                <CoursesChoiceTitle>Какой выбрать?</CoursesChoiceTitle>
                <TextArrow text={"Сравнить курсы"} />
              </CoursesChoice>
            );
          })}
        </CoursesInner>
      </Container>
    </CoursesWrap>
  );
};

const CoursesWrap = styled.div`
  margin-bottom: ${rem(140)};
`;

const CoursesTitle = styled(H2Wrap)`
  margin-bottom: ${rem(42)};
`;

const CoursesInner = styled.div`
  display: grid;
  gap: ${rem(30)};
  grid-template-columns: repeat(auto-fit, minmax(${rem(570)}, 1fr));
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
  }
`;

const CoursesChoice = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: ${rem(32)};
  padding: ${rem(40)} ${rem(30)} ${rem(30)} ${rem(40)};
  border: ${rem(2)} solid ${(props) => props.theme.colors.bgGrey};
`;

const CoursesChoiceTitle = styled(CourseTitle)`
  margin-bottom: ${rem(16)};
`;

export default Courses;
