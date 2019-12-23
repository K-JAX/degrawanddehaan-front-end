import React, { Component } from 'react';
import styled from 'styled-components';

class Burger extends Component {
    state = {  }

    render() { 
        const { onClick, burgerIsActive } = this.props;
        return ( 
            <Patty type="button" onClick={onClick} className={`burger ${burgerIsActive ? 'activeBurger' : ''}`}>
                <div className="bread-ham-cheese"/>
            </Patty>
         );
    }
}
 
export default Burger;


const Patty = styled.button`
    justify-self: flex-end;
    align-self: center;
    position: relative;
    z-index: 10;
    width: 46px;
    height: 28px;
    margin-left: auto;
    padding: 0;
    border: none;
    overflow: hidden;
    background: transparent;
    cursor: pointer;
    animation: 2s hideCancel forwards;

    .bread-ham-cheese {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-top: 2px solid black;
        transition: border 0s 1.0s;
        &:before, &:after {
            content: '';
            position: absolute;
            height: 1px;
            border-top: 2px solid black;
            right: 0;
            bottom: 2px;
            margin: auto;
            transition: 0.25s;
        }
        &:before{
            width: 45%;
            top: 0px;
            animation: 2s reverseBackSlash forwards;
        }
        &:after{
            width: 75%;
            animation: 2s reverseForwardSlash forwards;
        }
    }

    &.activeBurger{
        animation: 2s showCancel forwards;
        .bread-ham-cheese{
            border-top: 0 solid black;
            transition: border 0s 0.6s;
            &:before{
                animation: 2s rotateBackSlash forwards;
            }
            &:after{
                animation: 2s rotateForwardSlash forwards;
            }
        }
    }

    @keyframes showCancel {
        0%{
            width: 46px;
        }
        30%{
            width: 0;
            opacity: 1;
        }
        31%{
            width: 46px; 
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }

    @keyframes hideCancel {
        0%{
            width: 46px;
            opacity: 1;
        }
        50%{
            width: 46px;
            opacity: 0;
        }
        51%{
            width: 0;   
            opacity: 1;
        }
        100%{
            width: 46px;
            opacity: 1;
        }
    }


    @keyframes rotateBackSlash {
        0%{
            transform: rotate(0deg);
        }
        30%{
            width: 45%;
            transform: rotate(0deg);
        }
        31%{
            top: 0%;
            bottom: 0;
            width: 100%;
            transform: rotate(45deg);
        }               
        100%{
            top: 0;
            bottom: 0;
            width: 100%;
            transform: rotate(45deg);
        }
    }

    @keyframes reverseBackSlash {
        0%{
            top: 0;
            bottom: 0;
            width: 100%;
            transform: rotate(45deg);
        }
        50%{
            top: 0%;
            bottom: 0;
            width: 100%;
            transform: rotate(45deg);
        }
        51%{
            bottom: 2px;
            width: 0%;
            transform: rotate(0deg);
        }               
        100%{
            width: 45%;
            transform: rotate(0deg);
        }
    }

    @keyframes rotateForwardSlash {
        0%{
            transform: rotate(0deg);
        }
        30%{
            width: 45%;
            transform: rotate(0deg);
        }
        31%{
            width: 100%;
            top: 0;
            bottom: 0;
            transform: rotate(-45deg);
        }               
        100%{
            width: 100%;
            top: 0;
            bottom: 0;
            transform: rotate(-45deg);
        }    
    }

    @keyframes reverseForwardSlash {
        0%{
            width: 100%;
            top: 0%;
            bottom: 0;
            transform: rotate(-45deg);
        }
        50%{
            width: 100%;
            top: 0;
            bottom: 0;
            transform: rotate(-45deg);
        }
        51%{
            width: 0%;
            transform: rotate(0deg);
        }               
        100%{
            width: 75%;
            transform: rotate(0deg);
        }
    }

    &:focus{
        outline: none;
    }
`
