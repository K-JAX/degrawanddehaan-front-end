import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Header from './Organisms/Header';
import Footer from './Molecules/Footer';
import Home from './Templates/Home';
import Search from './Search';
import Page from './Page';
import Portfolio from './Templates/Portfolio';
import Post from './Post';
import Category from './Category';
import styled from 'styled-components';

export default (props) => {
  const [loaded, setLoad] = useState(0);
  const location = useLocation();

  let isHome;
  if ( location.pathname === '/'){
    isHome = true;
  }
  
  useEffect(() => {
    const timer = setTimeout(() => { setLoad(true) }, 750);
    return () => clearTimeout(timer);
  })

  return(
    <div className={`center ${ loaded ? 'loaded' : ''}`}>
      <Header location={location} isHome={isHome} />
      <PageContainerElement className={`pa1 padding table ${isHome ? '' : 'offset-header'}`}>
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/page/portfolio" component={Portfolio} />
          <Route exact path="/page/:slug" component={Page} />
          <Route exact path="/post/:slug" component={Post} />
          <Route exact path="/category/:slug" component={Category} />
        </Switch>
      </PageContainerElement>
      <Footer isHome={isHome} />
    </div>
)};


const PageContainerElement = styled.div`
  &.offset-header{
    margin-top: 175px;
  }
`