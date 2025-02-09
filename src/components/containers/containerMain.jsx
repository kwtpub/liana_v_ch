import styled from 'styled-components';

const StyledContainerMain = styled.div`
    display: flex;
    


    @media(max-width:799px){
        flex-direction: column;

    }
`



const ContainerMain = (props) => {
    
    return (
        <StyledContainerMain {...props}/>
    );
};
export default ContainerMain;