import { createGlobalStyle } from "styled-components";
import { rem } from "polished";

const GlobalStyle = createGlobalStyle`
  *,
  &::after,
  &::before {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    @media (max-width: 576px) {
      font-size: 12px;
    }
  }

  body {
    margin: 0;
    font-family: 'Aeroport', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    font-family: 'Aeroport', sans-serif;
  }

  button {
    outline: none;
    border: none;
    background: none;
  }

  .line {
    position: relative;
    display: inline-block;
    &::before {
      content: '';
      position: absolute;
    }
    &._v1 {
      &::before {
        bottom: ${rem(-6)};
        left: ${rem(4)};
        width: 100%;
        height: ${rem(7)};
        background: url('../images/line-v1.svg') no-repeat 0 0;
        background-size: ${rem(146)} ${rem(7)};
      }
    }
    &._v2 {
      &::before {
        bottom: ${rem(-6)};
        left: 0;
        width: 100%;
        height: ${rem(7)};
        background: url('../images/line-v2.svg') no-repeat 0 0;
        background-size: ${rem(160)} ${rem(7)};
      }
    }
    &._v3 {
      &::before {
        bottom: ${rem(-6)};
        left: 0;
        width: 100%;
        height: ${rem(8)};
        background: url('../images/line-v3.svg') no-repeat 0 0;
        background-size: ${rem(115)} ${rem(8)};
      }
    }
    &._v4 {
      &::before {
        bottom: ${rem(-6)};
        left: ${rem(9)};
        width: 100%;
        height: ${rem(7)};
        background: url('../images/line-v4.svg') no-repeat 0 0;
        background-size: ${rem(210)} ${rem(7)};
      }
    }
    &._v5 {
      &::before {
        bottom: ${rem(-6)};
        left: 0;
        width: 100%;
        height: ${rem(5)};
        background: url('../images/line-v5.svg') no-repeat 0 0;
        background-size: ${rem(51)} ${rem(5)};
      }
    }
    &._v6 {
      &::before {
        bottom: ${rem(-6)};
        left: ${rem(3)};
        width: 100%;
        height: ${rem(8)};
        background: url('../images/line-v6.svg') no-repeat 0 0;
        background-size: ${rem(217)} ${rem(8)};
      }
    }
  }

  .swiper {
    width: 100%;
  }
`;

export default GlobalStyle;
