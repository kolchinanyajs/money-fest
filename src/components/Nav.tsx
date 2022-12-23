import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Container from './Container';
import Logo from './Logo';
import Menu from './Menu';
import Button from './Button';

type Props = {};

const Nav = (props: Props) => {
  return (
    <NavWrap>
      <Container>
        <NavInner>
          <Logo />
          <Menu />
          <Button>Личный кабинет</Button>
        </NavInner>
      </Container>
    </NavWrap>
  );
};

const NavWrap = styled.nav`
  margin-bottom: ${rem(38)};
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Nav;
