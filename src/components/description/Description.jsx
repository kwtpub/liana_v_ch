import styled from 'styled-components';

const StyledDescription  = styled.h1`
    font-size: calc(${props => props.fontSize || '30px'} + 8 * (100vw - 320px) / 880);
    font-family: "EB Garamond", serif;
    font-style: ${props => props.fontStyle || 'italic'};
    font-weight: ${props => props.fontWeight || '200'};
    line-height: 1.4em;
    letter-spacing: 3px;
    padding: ${props => props.padding || '0px'};

    @media ${props => props.theme.media.phone} {
        font-size: calc(${props => props.fontSizeMob} + 8 * (100vw - 320px) / 880);
    }

    @media ${"(min-width:1700px)"} {
    font-size: 16px !important;
}
@media ${"(max-width:900px)"} {
    font-size: clamp(12px, 12px, 15px) ;
}
`


const Description = (props) => {
    
    return <StyledDescription  {...props}/>
};
export default Description;