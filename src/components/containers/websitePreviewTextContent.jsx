import styled from 'styled-components';

const StyledWebsitePreviewTextContent = styled.div`
    width: ${props => props.width || "100%"};
    display: flex;
    padding-top: ${props => props.paddingTop || '190px'};
    padding-left: ${props => props.paddingLeft || '17px'};
    padding-right: ${props => props.paddingRight || '17px'};
    padding-bottom: ${props => props.paddingBottom || '0px'};
    flex-wrap: wrap;
    text-align: left;
    word-break: break-word;
    flex-direction: column;
    @media ${props => props.theme.media.phone} { 
        padding-top: ${props => props.paddingTopMob};
        padding-left: ${props => props.paddingLeftMob};
        padding-right: ${props => props.paddingRightLeftMob };
        padding-bottom: ${props => props.paddingBottomLeftMob};
        width: ${props => props.widthPh || '70vw'};
        padding-left: 10vw;
        padding-right: 15vw;
    
    }
`


const WebsitePreviewTextContent = (props) => {
    
    return <StyledWebsitePreviewTextContent {...props}/>
};
export default WebsitePreviewTextContent;