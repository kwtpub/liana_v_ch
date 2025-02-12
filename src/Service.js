import styled from 'styled-components';
import WebsitePreview1 from './pages/website-preview-1/website-preview-1';
import image from './img/IMG_0292.jpg'
import Header from './pages/header/header';
import Footer from './pages/footer/footer-1';
import ServiceLink from './components/serviceLink/ServiceLink';

import serviceImage from './img/IMG_0291.jpg'
import serviceImage2 from './img/IMG_0301.jpg'
import serviceImage3 from './img/IMG_0304.jpg'
import serviceImage4 from './img/IMG_0299.jpg'
import serviceImage5 from './img/IMG_0289.jpg'
import serviceImage6 from './img/IMG_0290.jpg'
import serviceImage7 from './img/IMG_0306.jpg'
import serviceImage8 from './img/IMG_0308.jpg'

import SliderServicesText from './pages/slider-services-text/slider-services-text';

const StyledService = styled.div`
    display: grid;
    grid-template-columns: 32.3% 32.3% 32.3%;
    grid-column-gap: 1vw;
    grid-row-gap: 0.5vw;
  /* Будет создано 3 ряда */
    grid-template-rows: 33vh;
    @media(max-width: 799px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1vw;
    grid-row-gap: 0.5vw;
    grid-template-rows: 1fr;
    margin-bottom: 2vh;
    margin-top: 2vh;
    }
`
const txtDes = 'Услуги'

const titleText = 'LIANA CHIZHOVA'


const Service = (props) => {
    
    return (
        <>
            <Header/>
            <WebsitePreview1 paddingLeftMob={'0px'} paddingRightMob={'0px'} minHeightMob={'680px'} minHeight={'680px'} padding={'0px'}  titleColor={'white'} widthPh={'99vw'} width={'99vw'} heightMob={'50vh'} height={'30vh'} textAlign={'center'} color={'white'} bg={image} titleText={titleText} descriptionText={txtDes}/>
            <StyledService>
                <ServiceLink text={'Онлайн шопинг'} href={'/#/onlineshoping'} bg={serviceImage}/>
                <ServiceLink text={'Шопинг сопровождение'} href={'/#/shoppingsupport'} bg={serviceImage2}/>
                <ServiceLink text={'Разбор гардероба'} href={'/#/wardrobeclearance'} bg={serviceImage3}/>
                <ServiceLink text={'Экспресс подсказка'} href={'/#/expresstip'} bg={serviceImage4}/>
                <ServiceLink text={'Сбор чемодана'} href={'/#/assemblingsuitcase'} bg={serviceImage5}/>
                <ServiceLink text={'Образ на мероприятие'} href={'/#/lookfortheevent'} bg={serviceImage6}/>
                <ServiceLink text={'Все включено'} href={'/#/all'} bg={serviceImage7}/>
                <ServiceLink text={'Стилизация фотосессии'} href={'/#/stylizationphotoshoots'} bg={serviceImage8}/>
            </StyledService>
            
            <Footer/>
        </>
    );
};
export default Service;