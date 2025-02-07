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
                <a href='https://www.instagram.com/liana_v_ch?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='><h3 className='Footer-link'>instagram</h3></a>
                <a href='https://wa.me/89171012028?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D0%BC%D0%B5%D0%BD%D1%8F%20%D0%B7%D0%B0%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D0%BB%D0%B0%20%D0%BE%D0%B4%D0%BD%D0%B0%20%D0%B8%D0%B7%20%D0%B2%D0%B0%D1%88%D0%B8%D1%85%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%20'><h3 className='Footer-link'>Whatsapp</h3></a>
                <a href='mailto:Lyalyushar@gmail.com'><h3 className='Footer-link'>Liana_stylist@mail.ru</h3></a>
                <a href='tel:89171012028'><h3 className='Footer-link'>8-917-101-20-28</h3></a>

                </div>

            </div>

            <span className='Footer__line-2'></span>

            
        </div>
    );
};

export default Footer;