import React from 'react';
import './slider-services-text.css'
import { Carousel2 } from '../carousel-base copy/carousel';

const SliderServicesText = () => {
    return (
        <>
        <div className='slider-services-text__underLine'>
            <div className="slider-services-text__uvertical-line"></div>
        </div>

        <div className='slider-services-text__main-container'>
   
            <div className="slider-services-text__text-container">
            
                <h1 className='slider-services-text__text-container-title'>ВЫ МОЖЕТЕ ОБРАТИТЬСЯ КО МНЕ, ЕСЛИ?</h1>
                <Carousel2>
                <h2 className='slider-services-text__text-container-description'>“ВЫ ХОТИТЕ БЫТЬ В КУРСЕ ВСЕХ АКТУАЛЬНЫХ
ТЕНДЕНЦИЙ И ТРАТИТЬ МИНИМУМ ВРЕМЕНИ И ДЕНЕГ НА ШОППИНГ."</h2>
<h2 className='slider-services-text__text-container-description'>“ВЫ ХОТИТЕ БЫТЬ В КУРСЕ ВСЕХ АКТУАЛЬНЫХ
ТЕНДЕНЦИЙ И ТРАТИТЬ МИНИМУМ ВРЕМЕНИ И ДЕНЕГ НА ШОППИНГ2."</h2>
                </Carousel2>
            </div>



        </div>
        {/* <div className='UnderLine-2'>
            <div className="vertical__line-2"></div>
        </div> */}
        </>
    );
};

export default SliderServicesText;