import styled from 'styled-components';
import Title from '../title/Title';


const StyledServiceLink = styled.div`
    height: 33.33vh;
    width: 33.33vw;
    background-image: url(${props => props.bg} );
    background-color: gray;
    display: flex;

    align-items: center;
    justify-content: center;
    background-position: center;
    background-size: cover;
    margin: 0.5vw;

    @media(max-width:799px) {
        width: 99vw;
        height: 25vh;
    }
`
const StyledServiceLinkText = styled.a`
    color:${props => props.color || '#E54424'};

font-size: calc(${props => props.fontSize || '4px'} + 8 * (100vw - 320px) / 880);
font-family: "Karla";
font-weight: 200;
line-height: 1.4em;
letter-spacing: 3px;
padding: ${props => props.padding || "0px"};
margin-bottom: ${props => props.marginBot || "32px"};
word-wrap: break-word;

height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;



@media ${"(min-width:1700px)"} {
    font-size: clamp(12px, 12px, );
}
@media ${"(max-width:900px)"} {
    filter: brightness(95%);
    font-size: clamp(${props => props.fontSizeMob || "12px"}, ${props => props.fontSizeTable || "2em"}, ${props => props.fontSizeDes || "14px"}) ;
}
@media ${"(max-width:600px)"} { 
    font-size: clamp(${props => props.fontSizeMob1 || "10px"}, ${props => props.fontSizeMob1 || "2em"}, ${props => props.fontSizeMob1 || "10px"}) ;

}

&:hover {
    color: rgb(255, 255, 255,0.8)
}
`




const ServiceLink = (props) => {
    
    return (
        <>
            <StyledServiceLink {...props}>
                <StyledServiceLinkText  href={props.href}   marginBot={'0px'} color={'white'}>{props.text}</StyledServiceLinkText>
            </StyledServiceLink>
        </>
    );
};
export default ServiceLink;