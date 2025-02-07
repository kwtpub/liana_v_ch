import React from 'react';
import './website-preview-2.css'
import styled from 'styled-components';
const BackgroundDiv = styled.div`
background-image: url(${(props) => props.bg});
height: 90%;
width: 90%;
background-size: cover;
background-position: center;
`;

const WebsitePreview2 = (props) => {
    return (
        <div className='website-preview-2__container'>
            <div className='website-preview-2__container-content'>
                <h1>Становитесь более уверенным.</h1>
                    <div className="website-preview-2__container-photo"> 
                    <BackgroundDiv bg={props.bg}>
                        <div className='website-preview-2__container-photo__block'></div>     
                    </BackgroundDiv>
                    </div>
                <a href="https://wa.me/89171012028?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D0%BC%D0%B5%D0%BD%D1%8F%20%D0%B7%D0%B0%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D0%BB%D0%B0%20%D0%BE%D0%B4%D0%BD%D0%B0%20%D0%B8%D0%B7%20%D0%B2%D0%B0%D1%88%D0%B8%D1%85%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%20"><button className='website-preview-2__container-content-button'>Заказать разбор</button></a>
            </div>
        </div>
    );
};

export default WebsitePreview2;