import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Container from 'src/components/Container';
import { Link } from 'react-router-dom';

type Props = {};

const Sitemap = (props: Props) => {
  return (
    <SitemapWrap>
      <Container>
        <SitemapLink to={'/components'}>Компоненты</SitemapLink>
        <SitemapLink to={'/sitemap'}>Карта сайта</SitemapLink>
        <SitemapLink to={'/'}>Главная</SitemapLink>
        <SitemapLink to={'/crypto'}>Криптоинвестиции</SitemapLink>
        <SitemapLink to={'/workshop'}>Мастерская трейдинга</SitemapLink>
        <SitemapLink to={'/vip'}>Вип</SitemapLink>
        <SitemapLink to={'/speaker'}>Спикер</SitemapLink>
        <SitemapLink to={'/story'}>История</SitemapLink>
        <SitemapLink to={'/comparison'}>Сравнение курсов</SitemapLink>
      </Container>
    </SitemapWrap>
  );
};

const SitemapWrap = styled.div``;
const SitemapLink = styled(Link)`
  display: block;
`;

export default Sitemap;
