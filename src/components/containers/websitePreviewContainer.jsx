import styled from 'styled-components';


const StyledWebsitePreviewContainer  = styled.div`
    background-image: url(${(props) => props.bg});
    background-size: cover;
    background-position: center;
    width: ${props => props.width || '48vw' }; 
    height: ${props => props.height || '100vh' };
    min-height: ${props => props.minHeight || '980px' };  
    max-height:${props => props.maxHeight || ' 1300px' };
    background-size: cover;
    background-position: center;
    margin:${props => props.margin || '0.5vw' }; 
    display: inline-block;
    overflow: hidden;
    aspect-ratio: ${props => props.aRatio};
    @media ${props => props.theme.media.phone} {
        width: 100vw;
        margin: 0;
        height: ${props => props.heightMob || '100vh' };
        min-height: ${props => props.minHeightMob || '980px' };  
        max-height:${props => props.maxHeightMob || ' 1300px' };
    }
`;

const WebsitePreviewContainer = (props) => {
    
    return <StyledWebsitePreviewContainer {...props}/>
};
export default WebsitePreviewContainer;