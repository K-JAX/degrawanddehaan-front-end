import React, { Component } from 'react';
import styled from 'styled-components';


class SocialLink extends Component {
    state = {  }

    render() { 
        const { link, icon } = this.props;
        
        return ( 
            <a href={link} className="social-link" target="_blank" >
                <SVGElem className="social-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Rect />
                    <BorderWipe />
                    <IconPath icon={IconPaths[icon]} />
                </SVGElem>
            </a>
         );
    }
}
export default SocialLink;


// Create individual components for the basic svg structure of every social nav link
const IconPath = (props) => {
    const {icon} = props;
    return(
        <path className='icon-path' d={icon} fill="black"/>
)};

const Rect = () => (
    <rect className='rect' opacity="0.2" x="0.5" y="0.5" width="39" height="39" stroke="black"/>   
);

const BorderWipe = () => (
    <path className='border-wipe' d="M1 39L39 39" stroke="black" stroke-width="2"/>    
);
 

const SVGElem = styled.svg`
    .border-wipe{
        transition: 0.25s;
    }
    .icon-path{
        transition: 0.25s;
    }    
    &:hover{
        .border-wipe{
            stroke-width: 100px;
        }
        .icon-path{
            fill: white;
        }
    }
`

// svg paths of each social media icon
const IconPaths = {
    facebook: 'M24.1484 20.75H21.2188V29.5H17.3125V20.75H14.1484V17.1172H17.3125V14.3828C17.3125 13.3411 17.5078 12.4557 17.8984 11.7266C18.2891 10.9974 18.8359 10.4505 19.5391 10.0859C20.2682 9.69531 21.1016 9.5 22.0391 9.5C22.4557 9.5 22.8984 9.52604 23.3672 9.57812C23.8359 9.60417 24.2005 9.64323 24.4609 9.69531L24.8516 9.73438V12.8203H23.2891C22.5599 12.8203 22.026 13.0156 21.6875 13.4062C21.375 13.7708 21.2188 14.2266 21.2188 14.7734V17.1172H24.6953L24.1484 20.75Z',
    instagram: 'M16.8359 16.3359C17.7214 15.4505 18.7891 15.0078 20.0391 15.0078C21.2891 15.0078 22.3438 15.4505 23.2031 16.3359C24.0885 17.1953 24.5312 18.25 24.5312 19.5C24.5312 20.75 24.0885 21.8177 23.2031 22.7031C22.3438 23.5625 21.2891 23.9922 20.0391 23.9922C18.7891 23.9922 17.7214 23.5625 16.8359 22.7031C15.9766 21.8177 15.5469 20.75 15.5469 19.5C15.5469 18.25 15.9766 17.1953 16.8359 16.3359ZM17.9688 21.5703C18.5417 22.1432 19.2318 22.4297 20.0391 22.4297C20.8464 22.4297 21.5365 22.1432 22.1094 21.5703C22.6823 20.9974 22.9688 20.3073 22.9688 19.5C22.9688 18.6927 22.6823 18.0026 22.1094 17.4297C21.5365 16.8568 20.8464 16.5703 20.0391 16.5703C19.2318 16.5703 18.5417 16.8568 17.9688 17.4297C17.3958 18.0026 17.1094 18.6927 17.1094 19.5C17.1094 20.3073 17.3958 20.9974 17.9688 21.5703ZM25.4297 14.1094C25.638 14.2917 25.7422 14.526 25.7422 14.8125C25.7422 15.099 25.638 15.3464 25.4297 15.5547C25.2474 15.763 25.013 15.8672 24.7266 15.8672C24.4401 15.8672 24.1927 15.763 23.9844 15.5547C23.776 15.3464 23.6719 15.099 23.6719 14.8125C23.6719 14.526 23.776 14.2917 23.9844 14.1094C24.1927 13.901 24.4401 13.7969 24.7266 13.7969C25.013 13.7969 25.2474 13.901 25.4297 14.1094ZM28.75 15.9062C28.776 16.6094 28.7891 17.8073 28.7891 19.5C28.7891 21.1927 28.776 22.3906 28.75 23.0938C28.6719 24.6823 28.1901 25.9193 27.3047 26.8047C26.4453 27.6641 25.2214 28.1198 23.6328 28.1719C22.9297 28.224 21.7318 28.25 20.0391 28.25C18.3464 28.25 17.1484 28.224 16.4453 28.1719C14.8568 28.0938 13.6328 27.625 12.7734 26.7656C12.4349 26.4531 12.1615 26.0885 11.9531 25.6719C11.7448 25.2552 11.5885 24.8516 11.4844 24.4609C11.4062 24.0703 11.3672 23.6146 11.3672 23.0938C11.3151 22.3906 11.2891 21.1927 11.2891 19.5C11.2891 17.8073 11.3151 16.5964 11.3672 15.8672C11.4453 14.3047 11.9141 13.0938 12.7734 12.2344C13.6328 11.349 14.8568 10.8672 16.4453 10.7891C17.1484 10.763 18.3464 10.75 20.0391 10.75C21.7318 10.75 22.9297 10.763 23.6328 10.7891C25.2214 10.8672 26.4453 11.349 27.3047 12.2344C28.1901 13.0938 28.6719 14.3177 28.75 15.9062ZM26.875 24.6562C26.9531 24.4479 27.0182 24.1875 27.0703 23.875C27.1224 23.5365 27.1615 23.1458 27.1875 22.7031C27.2135 22.2344 27.2266 21.8568 27.2266 21.5703C27.2266 21.2839 27.2266 20.8802 27.2266 20.3594C27.2266 19.8385 27.2266 19.5521 27.2266 19.5C27.2266 19.4219 27.2266 19.1354 27.2266 18.6406C27.2266 18.1198 27.2266 17.7161 27.2266 17.4297C27.2266 17.1432 27.2135 16.7786 27.1875 16.3359C27.1615 15.8672 27.1224 15.4766 27.0703 15.1641C27.0182 14.8255 26.9531 14.5521 26.875 14.3438C26.5625 13.5365 26.0026 12.9766 25.1953 12.6641C24.987 12.5859 24.7135 12.5208 24.375 12.4688C24.0625 12.4167 23.6719 12.3776 23.2031 12.3516C22.7604 12.3255 22.3958 12.3125 22.1094 12.3125C21.849 12.3125 21.4453 12.3125 20.8984 12.3125C20.3776 12.3125 20.0911 12.3125 20.0391 12.3125C19.987 12.3125 19.7005 12.3125 19.1797 12.3125C18.6589 12.3125 18.2552 12.3125 17.9688 12.3125C17.6823 12.3125 17.3047 12.3255 16.8359 12.3516C16.3932 12.3776 16.0026 12.4167 15.6641 12.4688C15.3516 12.5208 15.0911 12.5859 14.8828 12.6641C14.0755 12.9766 13.5156 13.5365 13.2031 14.3438C13.125 14.5521 13.0599 14.8255 13.0078 15.1641C12.9557 15.4766 12.9167 15.8672 12.8906 16.3359C12.8646 16.7786 12.8516 17.1432 12.8516 17.4297C12.8516 17.6901 12.8516 18.0938 12.8516 18.6406C12.8516 19.1615 12.8516 19.4479 12.8516 19.5C12.8516 19.6042 12.8516 19.8516 12.8516 20.2422C12.8516 20.6068 12.8516 20.9193 12.8516 21.1797C12.8516 21.4141 12.8516 21.7266 12.8516 22.1172C12.8776 22.5078 12.9036 22.8464 12.9297 23.1328C12.9557 23.3932 12.9948 23.6667 13.0469 23.9531C13.099 24.2396 13.151 24.474 13.2031 24.6562C13.5417 25.4635 14.1016 26.0234 14.8828 26.3359C15.0911 26.4141 15.3516 26.4792 15.6641 26.5312C16.0026 26.5833 16.3932 26.6224 16.8359 26.6484C17.3047 26.6745 17.6693 26.6875 17.9297 26.6875C18.2161 26.6875 18.6198 26.6875 19.1406 26.6875C19.6875 26.6875 19.987 26.6875 20.0391 26.6875C20.1172 26.6875 20.4036 26.6875 20.8984 26.6875C21.4193 26.6875 21.8229 26.6875 22.1094 26.6875C22.3958 26.6875 22.7604 26.6745 23.2031 26.6484C23.6719 26.6224 24.0625 26.5833 24.375 26.5312C24.7135 26.4792 24.987 26.4141 25.1953 26.3359C26.0026 25.9974 26.5625 25.4375 26.875 24.6562Z',
    houzz: 'M21.0312 22.4297H16.9297V28.25H10.9141V10.75H15.1719V14.8125L27.125 18.1719V28.25H21.0312V22.4297Z',
}