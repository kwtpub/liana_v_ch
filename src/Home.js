
import Header from './pages/header/header.jsx';
import PageService from './pages/service-preview/service-preview.jsx';

import WebsitePreview1 from './pages/website-preview-1/website-preview-1.jsx';
import WebsitePreview2 from './pages/website-preview-2/website-preview-2.jsx';

import ServicesTextBox from './pages/services-text-box/services-text-box.jsx';
import UpperLine from './pages/services-text-box/UpperLine.jsx';


import './styles/App.css';

import { Carousel } from './components/carousel-base/carousel';
import SliderServicesText from './pages/slider-services-text/slider-services-text.jsx';
import Footer from './pages/footer/footer-1.jsx';

import image from './img/IMG_0296.jpg';
import image2 from './img/IMG_0288.jpg';
import image3 from './img/IMG_0300.jpg';
import image4 from './img/IMG_0298.jpg';
const txtDes = 'Я СТИЛИСТ И ЯРКИЙ ПРИМЕР ТОГО, ЧТО НЕ ВАЖНО СКОЛЬКО ВАМ ЛЕТ - ВЫ ВСЕГДА МОЖЕТЕ ИЗМЕНИТЬ СВОЮ ЖИЗНЬ.';
const txtTitle = 'СТИЛЬ, ПОВСЕДНЕВНЫЙ';

function Home() {
    return (
    <div className="Home">
      <Header />
      <div className='containerMain'>
          <WebsitePreview1 blurColor={'rgba(255,255,255,0.1)'} height={'80vh'} bg={image} descriptionText={txtDes} titleText={txtTitle}/>
          <WebsitePreview2 bg={image2}/>
      </div>
          <UpperLine/>

      <ServicesTextBox/>
      <Carousel>
          <div className='containerServise' > 
          <PageService image={image3}  textService={[{num:'01', name: 'ШОПИНГ СОПРОВОЖДЕНИЕ', slogan: '', description: 'Иногда сложно выбрать между несколькими вариантами. Сопровождающий поможет объективно оценить плюсы и минусы каждой вещи и принять правильное решение.'}]}/>
          </div>
          <div className='containerServise' >
          <PageService image={image4} textService={[{num:'02', name: 'ОНЛАЙН ШОПИНГ', slogan: '',description: 'помощь в выборе и покупке товаров в интернете. Экономия времени, идеальный подбор и уверенность в покупках.' }]}/>
          </div>
    </Carousel>
      <SliderServicesText/>

      <Footer/>
    </div>
  );
}

export default Home;
