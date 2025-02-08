import styled from 'styled-components';
import Title from '../title/Title';



const StyledButton = styled.button`
background-color: ${props => props.bgColor || '#E54424'};
border: 0px solid black;
color: ${props => props.color || 'black'};
padding: 15px 60px;
height: auto;
margin-bottom: ${props => props.marginBot || '0px'};
margin-top: ${props => props.marginTop || '0px'};
margin-right: ${props => props.marginRight || '0px'};
margin-left: ${props => props.marginLeft || '0px'};
&:hover {
    opacity: 0.8;
}
`


const Button = ({fontSize, fontSizeDes,props, children}) => {
    
    return (
        <StyledButton {...props}>
            <Title fontSize={fontSize} fontSizeDes={fontSizeDes}  marginBot={'0'} padding={'0'} color={'black'}>{children}</Title>
        </StyledButton>
    );
};
export default Button;