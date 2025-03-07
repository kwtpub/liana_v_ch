import styled from 'styled-components';

const StyledWebsitePreviewTextContent = styled.div`
    width: ${props => props.width || "100%"};
    display: flex;
    padding-top: ${props => props.paddingTop || '190px'};
    padding-left: ${props => props.paddingLeft || '17px'};
    padding-right: ${props => props.paddingRight || '17px'};
    padding-bottom: ${props => props.paddingBottom || '0px'};
    flex-wrap: wrap;
    text-align: ${props => props.textAlign || 'left'};
    word-break: break-word;
    flex-direction: column;
    @media ${props => props.theme.media.phone} { 
        padding-top: ${props => props.paddingTopMob};
        padding-left: ${props => props.paddingLeftMob || '10vw'};
        padding-right: ${props => props.paddingRightMob || '15vw' };
        padding-bottom: ${props => props.paddingBottomLeftMob};
        width: ${props => props.widthPh || '70vw'};
    
    }
`


const WebsitePreviewTextContent = (props) => {
    
    return <StyledWebsitePreviewTextContent {...props}/>
};
export default WebsitePreviewTextContent;