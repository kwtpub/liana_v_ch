import React, { useState }  from 'react';
import './header.css'
import styled from 'styled-components';
import Menu from './menu-header/menu-header';


const StyledBurger = styled.div`



.header__styledBurger-btn span {
    position: absolute;
    top: 50%; 
    margin-top: -1px;
    left: 23%;  
    margin-left: px ;
    width: 35px;
    height: 2px;
    background-color: #E54424;
    height: ${({ open}) => open ? '0' : '1'};
}
.header__styledBurger-btn span::before,
.header__styledBurger-btn span::after {
    position: absolute;
    top: 50%; 
    margin-top: -1px;
    left:90%;  
    margin-left:-31.5px ;
    width: 35px;
    height: 2px;
    background-color: #E54424;
}

.header__styledBurger-btn span::before,
.header__styledBurger-btn span::after {
    content: '';
    display: block;
    transition: 0.5s;
}
.header__styledBurger-btn span::before {
    
    transform: ${({ open}) => open ? 'rotate(45deg)' : 'rotate(0) translateY(-10px)'};
}
.header__styledBurger-btn span::after {
    transform: ${({ open}) => open ? 'rotate(-45deg)' : 'rotate(0) translateY(10px)'};
}
`;

const Header = () => {
    const[open, setOpen] = useState(false)

    const textMenu = [{text: "Произвольный текст лала я играю на гармошке у прохожих на видуу к сожаленью день рождения только раз в году"}]
    const items = [{href: '/#/service', value:"Услуги", icon:"anchor"},{value:"Обо мне", href: '/#/about', icon:"anchor"}, {value:"Контакты", href: '/#/contact', icon:"anchor"}]
    const handleMenuClick = (event) => {
        event.preventDefault();
      };
    return (
        <div className='header'>

        <header>
            <div className="header__navigarion-bar">

                <div className="header__navigarion-bar-title">
                    <a href='/'><h1>LIANA_V_CH</h1></a>
                </div>

                <div className="header__navigarion-bar-button">
                    <a href='/#/service'> <h2>УСЛУГИ</h2></a>
                    <a href='/#/about'> <h2>ОБО МНЕ</h2></a>
                    <a href='/#/contact'><h2>КОНТАКТЫ</h2></a>
                </div>

                <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div class="header__styledBurger-section">
                    <div className="header__styledBurger-fixed-position">
                        <a href="#" onClick={handleMenuClick} class="header__styledBurger-btn">
                            <span></span>
                        </a>
                    </div>
                </div>
                </StyledBurger>
            </div>


        </header>

        <Menu  items={items} textMenu={textMenu} open={open} setOpen={setOpen} />
        <span className='header__lower-border'></span>

        </div>
    );
};


export default Header;