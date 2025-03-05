import React from 'react';
import './menu-header.css'
// import Title from '../../../components/title/Title';

const Menu = ({items, textMenu, open , setOpen, items2}) => {
    return (
        <div className={open ? 'menu active' : 'menu'} onClick={() => setOpen(!open)}>
            <div className="menu__content">
                    <ul>
                        {items.map(item =>
                            <li>
                                <a href={item.href}> {item.value} </a>
                            </li>
                        ) 
                        
                        }
                    </ul>
                    
            </div>

            <div className="menu__logo">
            {textMenu.map(item =>
                           <p>{item.text}</p>
                        ) 
                        
                        }
                
                <h1>LIANA_V_CH</h1>
            </div>
           
        </div>
    );
};

export default Menu;