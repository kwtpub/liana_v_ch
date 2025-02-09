import styled from 'styled-components';


const StyledButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${props => props.marginTop || '60px'};
    margin-bottom: ${props => props.marginBottom || '60px'};
    
`


const ButtonContainer = (props) => {
    
    return (
        <StyledButtonContainer {...props}/>
    );
};
export default ButtonContainer;