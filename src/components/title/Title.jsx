import styled from "styled-components";

const StyledTitle = styled.h1`

color:${props => props.color || '#E54424'};

font-size: calc(${props => props.fontSize || '8px'} + 8 * (100vw - 320px) / 880);
font-family: "Karla";
font-weight: 400;
line-height: 1.4em;
letter-spacing: 3px;
padding: ${props => props.padding || "0px"};
margin-bottom: ${props => props.marginBot || "32px"};
word-wrap: break-word;
display: ${props => props.display};
height: ${props => props.height || 'auto'};
width: ${props => props.width || 'auto'};

@media ${"(min-width:1700px)"} {
    font-size: clamp(15px, 4em, );
}
@media ${"(max-width:900px)"} {
    font-size: clamp(${props => props.fontSizeMob || "12px"}, ${props => props.fontSizeTable || "2em"}, ${props => props.fontSizeDes || "14px"}) ;
}
@media ${"(max-width:600px)"} { 
    font-size: clamp(${props => props.fontSizeMob1 || "10px"}, ${props => props.fontSizeMob1 || "2em"}, ${props => props.fontSizeMob1 || "10px"}) ;

}
`
const Title = (props) => {
    return (

        <a href={props.href}><StyledTitle {...props}/></a>
    );
};
export default Title;