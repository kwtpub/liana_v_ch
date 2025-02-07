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
    display: flex;
    flex-direction: row;
    @media(max-width: 799px) {
        flex-direction: column;
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
            </StyledService>
            <Footer/>
        </>
    );
};
export default Service;