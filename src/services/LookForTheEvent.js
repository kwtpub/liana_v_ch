import WebsitePreview3 from "../pages/website-preview-3/website-preview-3";
import image from '../img/IMG_0290.jpg'
import WebsitePreview1 from "../pages/website-preview-1/website-preview-1";
import Header from "../pages/header/header";
import Footer from "../pages/footer/footer-1";
import ProcessService from "../components/process-service/ProcessService";
import ButtonContainer from "../components/button/ButtonContainer";
import Button from "../components/button/button";

const title = 'СТАНЬТЕ УВЕРЕННЕЕ, ЧЕМ КОГДА-ЛИБО'
const subtitle1 = 'Образ на'
const subtitle2 = 'Мероприятие'
const description = 'Настоящий личный стиль заключается в том, чтобы подчеркнуть то, что делает вас уникальным, и представить лучшую, самую уверенную версию себя. Например, когда вы накидываете эту идеальную куртку через плечи, и она мгновенно дает вам лучшую осанку... или винтажное платье, которое так красиво драпируется, что ваша прогулка становится чем-то вроде скольжения.'
const LookForTheEvent = (props) => {
    
    return (
        <>
        <Header/>
        <WebsitePreview1 bg={image}/>
        <WebsitePreview3 title={title} subtitle={subtitle1} subtitle2={subtitle2} description={description}/>
        <ProcessService/>
        <ButtonContainer>
            <Button href={'/'}>Записаться</Button>
        </ButtonContainer>
        <Footer/>
        </>
    );
};
export default LookForTheEvent;