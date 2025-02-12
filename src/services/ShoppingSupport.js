
import Header from "../pages/header/header";
import WebsitePreview1 from "../pages/website-preview-1/website-preview-1";
import WebsitePreview3 from "../pages/website-preview-3/website-preview-3";

import image from '../img/IMG_0300.jpg'
import '../styles/App.css';
import Footer from "../pages/footer/footer-1";
import ProcessService from "../components/process-service/ProcessService";
import ButtonContainer from "../components/button/ButtonContainer";
import Button from "../components/button/button";


const title = 'СТАНЬТЕ УВЕРЕННЕЕ, ЧЕМ КОГДА-ЛИБО'
const subtitle1 = 'ШОПИНГ'
const subtitle2 = 'СОПРОВОЖДЕНИЕ'
const description = 'Настоящий личный стиль заключается в том, чтобы подчеркнуть то, что делает вас уникальным, и представить лучшую, самую уверенную версию себя. Например, когда вы накидываете эту идеальную куртку через плечи, и она мгновенно дает вам лучшую осанку... или винтажное платье, которое так красиво драпируется, что ваша прогулка становится чем-то вроде скольжения.'
function ShoppingSupport() {
    
    return (
        <div className='Home'>

            <Header/>
            <div className='containerMain'>
            <WebsitePreview1 bg={image}/>
            <WebsitePreview3 title={title} subtitle={subtitle1} subtitle2={subtitle2} description={description}/>
            </div>
            <ProcessService/>
            <ButtonContainer>
                <Button href={'/'}>Записаться</Button>
            </ButtonContainer>
            <Footer/>
        </div>

    );
}

export default ShoppingSupport