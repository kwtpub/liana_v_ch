import styled from 'styled-components';
import WebsitePreview1 from './pages/website-preview-1/website-preview-1';
import image from './img/img3.jpg'
import image2 from './img/img1.jpg'
import Header from './pages/header/header';
import Footer from './pages/footer/footer-1';
import ServiceLink from './components/serviceLink/ServiceLink';

import serviceImage from './img/img5.jpg'
const StyledService = styled.div`
    display: flex;
    flex-direction: row;

`
const txtDes = 'Услуги'

const titleText = 'LIANA CHIZHOVA'


const Service = (props) => {
    
    return (
        <>
            <Header/>
            <WebsitePreview1 padding={'0px'}  titleColor={'white'} widthPh={'99vw'} width={'99vw'} height={'60vh'} textAlign={'center'} color={'white'} bg={image} titleText={titleText} descriptionText={txtDes}/>
            <StyledService>
                <ServiceLink href={'/'} bg={serviceImage}/>
                <ServiceLink href={'/'} bg={serviceImage}/>
                <ServiceLink href={'/'} bg={serviceImage}/>
            </StyledService>
            <Footer/>
        </>
    );
};
export default Service;