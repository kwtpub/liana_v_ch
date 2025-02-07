import styled from 'styled-components';
import WebsitePreview1 from './pages/website-preview-1/website-preview-1';
import image from './img/img3.jpg'
import image2 from './img/img1.jpg'
import Header from './pages/header/header';
import Footer from './pages/footer/footer-1';
import ServiceLink from './components/serviceLink/ServiceLink';

import serviceImage from './img/img5.jpg'
import serviceImage2 from './img/img1.jpg'
import serviceImage3 from './img/img2.jpg'

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
                <ServiceLink text={'Шопинг сопровождение'} href={'/#/shoppingsuppot'} bg={serviceImage2}/>
                <ServiceLink text={'Разбор гардероба'} href={'/'} bg={serviceImage3}/>
                <ServiceLink text={'Экспресс подсказка'} href={'/'} bg={serviceImage3}/>
                <ServiceLink text={'Сбор чемодана'} href={'/'} bg={serviceImage3}/>
                <ServiceLink text={'Образ на мероприятие'} href={'/'} bg={serviceImage3}/>
                <ServiceLink text={'Все включено'} href={'/'} bg={serviceImage3}/>
                <ServiceLink text={'Стилизация фотосессии'} href={'/'} bg={serviceImage3}/>
            </StyledService>
            <Footer/>
        </>
    );
};
export default Service;