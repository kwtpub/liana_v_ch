import styled from 'styled-components';
import WebsitePreview1 from './pages/website-preview-1/website-preview-1';
import image from './img/img3.jpg'
import image2 from './img/img1.jpg'
import Header from './pages/header/header';
import Footer from './pages/footer/footer-1';
import ServiceLink from './components/serviceLink/ServiceLink';

import serviceImage from './img/img5.jpg'
const StyledService = styled.div`


`
const txtDes = 'LIANA CHIZHOVA'



const Service = (props) => {
    
    return (
        <>
            <Header/>
            <WebsitePreview1 titleColor={'white'} width={'100vw'} height={'60vh'} textAlign={'left'} color={'white'} bg={image} titleText={'Услуги'} descriptionText={txtDes}/>
            <ServiceLink href={'/'} bg={serviceImage}/>
            <Footer/>
        </>
    );
};
export default Service;