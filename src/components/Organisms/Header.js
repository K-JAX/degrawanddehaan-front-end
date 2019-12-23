import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { withApollo } from 'react-apollo';
import { compose } from 'recompose';
import styled from 'styled-components';

// Components
import Logo from '../Atoms/Logo';
import SidebarMenu from '../Molecules/SidebarMenu';
import PulloutMenu from '../Molecules/PulloutMenu';

const HeaderElement = styled.header`
  z-index: 10;
  position: fixed;
  &.home{
    float: left;
    width: 277px;
    height: 100%;
    .flex{
      flex-direction: column;
    }
  }
  &.normal{
    width: 100%;
    height: 200px;
    .flex{
      width: 100%;
      flex-direction: row;
    }    
  }
`

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      mobileMenuActive: false,
    } 
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      mobileMenuActive: !state.mobileMenuActive
    }))
  }
  
  render() {
    const {mobileMenuActive} = this.state;
    const { pathname } = this.props.location;
    let isHome;

    if ( pathname === '/'){
      isHome = true
    };
    
    return (
      <HeaderElement id="site-header" className={`${isHome ? 'home' : 'normal'} flex pa1 justify-between nowrap padding bottomborder `} >
        <div className="flex flex-fixed black">
          <Logo />
          { isHome ? <SidebarMenu /> : <PulloutMenu burgerOnClick={this.handleClick} menuActive={mobileMenuActive} /> }
        </div>
      </HeaderElement>
    );
  }
}

export default compose(
  withRouter,
  withApollo,
)(Header);
