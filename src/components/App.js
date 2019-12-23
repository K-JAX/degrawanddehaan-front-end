import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Organisms/Header';
import Footer from './Molecules/Footer';
import Home from './Templates/Home';
import Search from './Search';
import Page from './Page';
import Portfolio from './Portfolio';
import Post from './Post';
import Category from './Category';

export default () => (
  <div className="center">
    <Header />
    <div className="pa1 padding table">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/page/portfolio" component={Portfolio} />
        <Route exact path="/page/:slug" component={Page} />
        <Route exact path="/post/:slug" component={Post} />
        <Route exact path="/category/:slug" component={Category} />
      </Switch>
    </div>
    <Footer />
  </div>
);
