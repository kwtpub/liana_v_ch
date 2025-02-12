import styled from 'styled-components';

const StyledSubtitle = styled.h1`
    font-size: calc(${props => props.fontSize || '30px'} + 8 * (100vw - 320px) / 880);
    font-family: "GT Sectra Regular";
    font-style: ${props => props.fontStyle || 'italic'};
    font-weight: 200;
    line-height: 1.4em;
    letter-spacing: 3px;
    color: ${props => props.color || 'black'};
    z-index: 3;
    @media ${"(min-width:1700px)"} {
    font-size: clamp(10px, 2em, 30px);
}
@media ${"(max-width:900px)"} {
    font-size: clamp(26px, 2em, 26px) ;
}
`

const Subtitle = (props) => {
    
    return <StyledSubtitle {...props}/>
};
export default Subtitle;