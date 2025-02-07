import React from 'react';
import './website-preview-1.css'
import styled from 'styled-components';
import Title from '../../components/title/Title';
import Subtitle from '../../components/subtitle/Subtitle';
import WebsitePreviewContainer from '../../components/containers/websitePreviewContainer';
import WebsitePreviewTextContent from '../../components/containers/websitePreviewTextContent';




// const WebsitePreviewTextContent = styled.h2`
//     width: 35vw;
//     display: flex;
//     padding-right: 2vw;  
//     padding-top: 190px;
//     padding-left: 10vw;  
//     flex-wrap: wrap;
//     text-align: left;
    
//     @media ${props => props.theme.media.phone} { 
//         width: 70vw;
//         padding-left: 10vw;
//         padding-right: 15vw;
//         padding-top: 190px;
//         margin-left: 40px;;
//     }
// `

const WebsitePreview1= ({ titleColor,textAlign, color, ...props}) => {

    return (
        
        <WebsitePreviewContainer  {...props}>
            <WebsitePreviewTextContent paddingRightMob={"0px"}  paddingLeftMob={'0px'} textAlign={textAlign}  paddingLeft={ props.padding || '30px'} widthPh={props.widthPh} width={ props.width ||'35vw'}>          
                        <Title  color={titleColor}>{props.titleText}</Title> 
                        <Subtitle color={color} fontStyle={'normal'}>  {props.descriptionText}</Subtitle> 
            </WebsitePreviewTextContent>
        </WebsitePreviewContainer>
        

    );
    
};

export default WebsitePreview1;