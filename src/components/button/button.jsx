import styled from 'styled-components';
import Title from '../title/Title';



const StyledButton = styled.button`
background-color: ${props => props.bgColor || '#E54424'};
border: 0px solid black;
color: ${props => props.color || 'black'};
padding: 20px 80px;
height: auto;

&:hover {
    opacity: 0.8;
}
`


const Button = ({props, children}) => {
    
    return (
        <StyledButton {...props}>
            <Title marginBot={'0'} padding={'0'} color={'black'}>{children}</Title>
        </StyledButton>
    );
};
export default Button;