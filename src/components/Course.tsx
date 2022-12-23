import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Link } from 'react-router-dom';
import TextArrow from './TextArrow';

type Props = {
  label: string;
  title: string;
  description: string;
  id: number;
};

const Course = ({ label, title, description, id }: Props) => {
  return (
    <CourseWrap to={'/'}>
      <CourseContent>
        <CourseLabel>{label}</CourseLabel>
        <CourseTitle>{title}</CourseTitle>
        <CourseDescription>{description}</CourseDescription>
        <CourseMore>
          <TextArrow text={'Подробнее'} />
        </CourseMore>
      </CourseContent>
      <CourseImgBox>
        <CourseImg src={`./images/course-${id}.png`} alt={'img'} />
      </CourseImgBox>
    </CourseWrap>
  );
};

const CourseWrap = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${rem(50)};
  background: #f7f7f7;
  border-radius: ${rem(32)};
  padding: ${rem(40)} ${rem(30)} ${rem(30)} ${rem(40)};
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    gap: ${rem(17)};
    flex-wrap: wrap;
  }
`;

const CourseContent = styled.div``;

const CourseImgBox = styled.div`
  width: ${rem(140)};
  height: ${rem(140)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    order: -1;
  }
`;

const CourseImg = styled.img`
  position: relative;
  left: ${rem(-10)};
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CourseLabel = styled.div`
  display: inline-block;
  font-size: ${rem(16)};
  line-height: 100%;
  color: ${(props) => props.theme.colors.black};
  padding: ${rem(4)} ${rem(14)} ${rem(6)};
  text-align: center;
  background: #fcc344;
  margin-bottom: ${rem(10)};
`;

export const CourseTitle = styled.p`
  font-weight: 700;
  font-size: ${rem(28)};
  line-height: 114%;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${rem(12)};
`;

const CourseDescription = styled.div`
  font-weight: 400;
  font-size: ${rem(18)};
  line-height: 133%;
  color: #717171;
  margin-bottom: ${rem(50)};
`;

const CourseMore = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

export default Course;
