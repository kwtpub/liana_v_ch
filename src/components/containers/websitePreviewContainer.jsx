import styled from 'styled-components';


const StyledWebsitePreviewContainer  = styled.div`
    background-image: url(${(props) => props.bg});
    position: relative;
    background-size: cover;
    background-position: center;
    width: ${props => props.width || '48vw' }; 
    height: ${props => props.height || '100vh' };
    min-height: ${props => props.minHeight || '980px' };  
    max-height:${props => props.maxHeight || ' 1300px' };
    background-size: cover;
    background-position: center;
    margin:${props => props.margin || '0.5vw' }; 
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBot};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    display: inline-block;
    overflow: hidden;
    aspect-ratio: ${props => props.aRatio};
    @media ${props => props.theme.media.phone} {
        width: 100vw;
        margin: 0;
        height: ${props => props.heightMob || '100vh' };
        min-height: ${props => props.minHeightMob || '980px' };  
        max-height:${props => props.maxHeightMob || ' 1300px' };
        margin-top: ${props => props.marginTopMob};
        margin-bottom: ${props => props.marginBotMob};
        margin-left: ${props => props.marginLeftMob};
        margin-right: ${props => props.marginRightMob};
    }
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${props => props.blurColor ||  'rgba(255,255,255,0.0)' };
        z-index: 2;
    }
`;

const WebsitePreviewContainer = (props) => {
    
    return <StyledWebsitePreviewContainer {...props}/>
};
export default WebsitePreviewContainer;