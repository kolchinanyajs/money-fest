import React from "react";
import styled from "styled-components";
import Container from "src/components/Container";
import { Link } from "react-router-dom";
import { rem } from "polished";

type Props = {};

const Sitemap = (props: Props) => {
  const links = [
    {
      link: "/components",
      name: "Компоненты",
    },
    {
      link: "/sitemap",
      name: "Карта сайта",
    },
    {
      link: "/",
      name: "Главная",
    },
    {
      link: "/crypto",
      name: "Криптоинвестиции",
    },
    {
      link: "/workshop",
      name: "Мастерская трейдинга",
    },
    {
      link: "/vip",
      name: "Вип",
    },
    {
      link: "/speaker",
      name: "Спикер",
    },
    {
      link: "/story",
      name: "История",
    },
    {
      link: "/comparison",
      name: "Сравнение курсов",
    },
  ];
  return (
    <SitemapWrap>
      <Container>
        {links.map(({ link, name }) => (
          <SitemapLink key={name} to={link}>
            {name}
          </SitemapLink>
        ))}
      </Container>
    </SitemapWrap>
  );
};

const SitemapWrap = styled.div`
  margin-bottom: ${rem(100)};
`;

const SitemapLink = styled(Link)``;

export default Sitemap;
