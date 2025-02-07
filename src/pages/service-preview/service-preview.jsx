import React from 'react';
import './service-preview.css'
import styled from 'styled-components';
import WebsitePreviewContainer from '../../components/containers/websitePreviewContainer';
import image from './ModelGirl.webp'
import Button from '../../components/button/button';

const StyledImg = styled.div`
    background-image: url(${props => props.image || image});
    background-size: cover;
    background-position: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    aspect-ratio: 1/ 1.5;
`



const PageService = ({textService, ...props}) => {
    return (
        <div className="service-preview__main-container">
            <div className="service-preview__container">
            {textService.map(text =>
                <div className="service-preview__container">
                    
                                <h1 className='num'>{text.num}</h1>
                                <h2 className='name'>{text.name}</h2>
                                <StyledImg image={props.image}></StyledImg>
                                <h2 className='slogan'>{text.slogan}</h2>
                                <h3 className='description'>{text.description}</h3>

                                <Button  fontSizeDes={'12px'}>ПОЗВОНИ МНЕ</Button>
                </div>
                        ) 
                        }

        </div>
        </div>
    );
};

export default PageService;