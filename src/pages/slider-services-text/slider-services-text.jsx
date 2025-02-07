import React from 'react';
import './slider-services-text.css'
import { Carousel2 } from '../../components/carousel-base copy/carousel';
import Description from '../../components/description/Description';
import Title from '../../components/title/Title';


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
                <Title color={'black'} marginBot={'0px'} fontSizeMob1={'10px'}>“ВЫ ХОТИТЕ БЫТЬ В КУРСЕ ВСЕХ АКТУАЛЬНЫХ
ТЕНДЕНЦИЙ И ТРАТИТЬ МИНИМУМ ВРЕМЕНИ И ДЕНЕГ НА ШОППИНГ."</Title>
<Title color={'black'} marginBot={'0px'} fontSizeMob1={'10px'}>“ВЫ ХОТИТЕ БЫТЬ В КУРСЕ ВСЕХ АКТУАЛЬНЫХ
ТЕНДЕНЦИЙ И ТРАТИТЬ МИНИМУМ ВРЕМЕНИ И ДЕНЕГ НА ШОППИНГ2."</Title>
                </Carousel2>
            </div>



        </div>
        </>
    );
};

export default SliderServicesText;