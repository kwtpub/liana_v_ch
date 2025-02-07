import React from 'react';
import './services-text-box.css'
const ServicesTextBox = () => {
    return (
        <div className='services-text-box__main-container'>

            <div className='services-text-box__text-container'>
                <div className='services-text-box__text-container-position'>
                    <h1>Вот уже на протяжении 7ми лет я учусь и развиваюсь в сфере моды и стиля. Мне очень нравиться каждый делать этот мир лучше и ярче.</h1>
                    <h2>ВЫБЕРИТЕ, КАК Я СДЕЛАЮ ВОЛШЕБСТВО</h2>
                </div>
            </div>

            <div className='services-text-box-underline'>
                <div className="services-text-box-vertical-line"></div>
            </div>

        </div>
    );
};

export default ServicesTextBox;