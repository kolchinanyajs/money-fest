import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

type Props = {};

const Video = (props: Props) => {
  return (
    <VideoWrap>
      <VideoCover>
        <VideoPlay />
      </VideoCover>
    </VideoWrap>
  );
};

const VideoWrap = styled.div`
  position: relative;
  height: ${rem(299)};
  border-radius: ${rem(32)};
  overflow: hidden;
  margin-bottom: ${rem(42)};
`;

const VideoCover = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url('./images/video-cover.png') no-repeat center center;
  background-size: cover;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const VideoPlay = styled.div`
  position: relative;
  z-index: 1;
  width: ${rem(65)};
  height: ${rem(65)};
  border-radius: 50%;
  background: url("data:image/svg+xml,%3Csvg width='65' height='65' viewBox='0 0 65 65' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='32.5' cy='32.5' r='32.5' fill='white'/%3E%3Cpath d='M46 33L25 45.1244V20.8756L46 33Z' fill='black'/%3E%3C/svg%3E%0A")
    no-repeat center center;
`;

export default Video;
