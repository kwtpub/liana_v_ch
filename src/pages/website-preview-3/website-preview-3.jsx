import React from 'react';
import Title from '../../components/title/Title';
import Subtitle from '../../components/subtitle/Subtitle';
import WebsitePreviewContainer from '../../components/containers/websitePreviewContainer';
import WebsitePreviewTextContent from '../../components/containers/websitePreviewTextContent';
import Description from '../../components/description/Description';

const WebsitePreview3 = (props) => {
    
    return (
    <WebsitePreviewContainer minHeightMob={'auto'} heightMob={'100%'}>
        <WebsitePreviewTextContent paddingLeftMob={'10px !important'} paddingBottom={'45px'} paddingTopMob={'10px'} width={'100%'} widthPh={'100vw'}>
                    <Title fontSize={'10px'}>{props.title}</Title> 
                    <Subtitle fontSize={'35px'}>{props.subtitle}<br/>{props.subtitle2}</Subtitle>
        </WebsitePreviewTextContent>

        <WebsitePreviewTextContent paddingTop={'20px'} paddingLeftMob={'10px !important'} paddingBottom={'45px'} paddingTopMob={'10px'} width={'100%'} widthPh={'100vw'}>
                    <Description fontSizeMob={'15px'} fontSize={'15px'}>{props.description}</Description>
        </WebsitePreviewTextContent>
    </WebsitePreviewContainer>
    );
};
export default WebsitePreview3;