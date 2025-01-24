import React from 'react';
import './service-preview.css'
const Page_service = ({textService}) => {
    return (
        <div className="service-preview__main-container">
            <div className="service-preview__container">
            {textService.map(text =>
                <div className="service-preview__container">
                    
                                <h1 className='num'>{text.num}</h1>
                                <h2 className='name'>{text.name}</h2>
                                <div className="img4"></div>
                                <h2 className='slogan'>{text.slogan}</h2>
                                <h3 className='description'>{text.description}</h3>

                                <button className='contact-us'>ПОЗВОНИ МНЕ</button>
                </div>
                        ) 
                        }

        </div>
        </div>
    );
};

export default Page_service;