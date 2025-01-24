import React from 'react';
import './menu-header.css'

const Menu = ({items, textMenu, open , setOpen}) => {
    return (
        <div className={open ? 'menu active' : 'menu'} onClick={() => setOpen(!open)}>
            <div className="menu__content">
                    <ul>
                        {items.map(item =>
                            <li>
                                <a href={items.herf}>{item.value}</a>
                            </li>
                        ) 
                        
                        }
                    </ul>
                    
            </div>

            <div className="menu__logo">
            {textMenu.map(item =>
                           <p>Произвольный текст лала я играю на гармошке у прохожих на видуу к сожаленью день рождения только раз в году</p>
                        ) 
                        
                        }
                
                <h1>LIANA_V_CH</h1>
            </div>
           
        </div>
    );
};

export default Menu;