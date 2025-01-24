
import Header from './components/header/header';
import Page_service from './components/service-preview/service-preview.jsx';

import WebsitePreview1 from './components/website-preview-1/website-preview-1';
import WebsitePreview2 from './components/website-preview-2/website-preview-2';

import ServicesTextBox from './components/services-text-box/services-text-box.jsx';
import Upper_line from './components/services-text-box/Upper_line';


import './styles/App.css';

import { Carousel } from './components/carousel-base/carousel'
import SliderServicesText from './components/slider-services-text/slider-services-text.jsx';
import Footer from './components/footer/footer-1.jsx';




function App() {
    return (
    <div className="App">
      <Header/>
      <div className='containerMain'>
          <WebsitePreview1/>
          <WebsitePreview2/>
      </div>
          <Upper_line/>

      <ServicesTextBox/>
      <Carousel>
          <div className='containerServise' > 
          <Page_service  textService={[{num:'01', name: 'ШОПИНГ СОПРОВОЖДЕНИЕ', slogan: 'УЛУЧШЬ СВОЙ ГОРДИРОБ ЗА ОДИН ДЕНЬ', description: ''}]}/>
          </div>
          <div className='containerServise' >
          <Page_service  textService={[{num:'02', name: 'ОНЛАЙН ШОПИНГ', slogan: 'УЛУЧШЬ СВОЙ ГОРДИРОБ ЗА ОДИН ДЕНЬ',description: '' }]}/>
          </div>
    </Carousel>
      <SliderServicesText/>

      <Footer/>
    </div>
  );
}

export default App;
