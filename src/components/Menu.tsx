import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Link } from 'react-router-dom';

type Props = {};

const Menu = (props: Props) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('db/db.json')
      .then((response) => response.json())
      .then((json) => setMenuItems(json['menuItems']));
  }, []);

  return (
    <MenuWrap>
      {menuItems.map(({ name, link }, index) => (
        <MenuItem key={index}>
          <MenuLink to={`${link}`}>{name}</MenuLink>
        </MenuItem>
      ))}
    </MenuWrap>
  );
};

const MenuWrap = styled.ul`
  display: flex;
  gap: ${rem(32)};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

const MenuItem = styled.li``;

const MenuLink = styled(Link)`
  font-weight: 500;
  font-size: ${rem(14)};
  line-height: ${rem(19)};
  color: ${(props) => props.theme.colors.black};
`;

export default Menu;
