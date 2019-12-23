import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Nav from './Nav';

class SidebarMenu extends Component {
    state = {  }

    render() { 

        return ( 
            <SidebarMenuElem>
                <Nav className="menuBox"/>
            </SidebarMenuElem>
        );
    }
}
 
export default SidebarMenu;


const SidebarMenuElem = styled.div`
    .menuBox{
        a{
            &:after{
                content: ' -'
            }
        }
    }
`