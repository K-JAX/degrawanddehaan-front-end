import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Nav from './Nav';
import Burger from '../Atoms/Burger'


const Puller = styled.div`
    justify-self: flex-end;        
    align-self: center;
    margin-left: auto;
    .pullout{
        position: fixed;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        top: 0;
        right: -100%;
        opacity: 0;
        transition: right 0s, opacity 1s;
        a{
            text-align: center;
        }

        &.pulled-out {
            opacity 1;
            right: 0;
        }
    }
`

class PulloutMenu extends Component {
    state = {  }

    render() { 
        const { menuActive, burgerOnClick } = this.props;

        return ( 
            <Puller>
                <Burger onClick={ burgerOnClick } burgerIsActive={menuActive} />
                <Nav className={`pullout ${menuActive ? 'pulled-out' : ''}`} />
            </Puller>
        );
    }
}
 
export default PulloutMenu;