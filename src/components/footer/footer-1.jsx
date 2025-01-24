import React from 'react';

import './footer.css'

const Footer = () => {
    return (
        <div className='Footer__main-container'>

            <span className='Footer__line-1'></span>


            <div className="Footer__text-container">

                <h2 className='Footer-title'>Контакты</h2>

                <span className='Footer__line-2-mob'></span>
                
                <div className="link-container">
                <h3 className='Footer-link'>instagram</h3>
                <h3 className='Footer-link'>Whatsapp</h3>
                <h3 className='Footer-link'>Liana_stylist@mail.ru</h3>
                <h3 className='Footer-link'>+7 999 999 999</h3>

                </div>

            </div>


            <span className='Footer__line-2'></span>

            
        </div>
    );
};

export default Footer;