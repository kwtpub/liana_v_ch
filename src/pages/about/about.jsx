import styled from 'styled-components';
import NotFound from '../notFound/notFound';
import WebsitePreview1 from '../website-preview-1/website-preview-1';
import Header from '../header/header';
import Button from '../../components/button/button';
import WebsitePreview3 from '../website-preview-3/website-preview-3'
import image from '../../img/img3.jpg'
import ContainerMain from '../../components/containers/containerMain';
import ServicesTextBox from '../services-text-box/services-text-box'
import Footer from '../footer/footer-1';
import Upper_line from '../services-text-box/UpperLine';
const StyledAbout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

const titleText = 'liana_v_ch'
const txtDes = 'Stylist'



const About = (props) => {
    
    return (
        <>
        <StyledAbout>
        <Header/>
        <NotFound/>
        {/* <ContainerMain>
            <WebsitePreview3  paddingRightMob={'0px'} paddingLeftMob={'0px'} marginTopMob={'100px'} textAlign={'center'} subtitle2={'Stylist'} subtitle={'liana_v_ch'} />
            <WebsitePreview1 color={'white'} descriptionText={'bla bla'} bg={image}/>
        </ContainerMain> */}
        </StyledAbout>
        
        </>
    );
};
export default About;