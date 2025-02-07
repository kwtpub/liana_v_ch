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
`



const ServiceLink = (props) => {
    
    return (
        <>
            <StyledServiceLink {...props}>
                <Title display={'block'} href={props.href}   marginBot={'0px'} color={'white'}>ОНЛАЙН ШОПИНГ</Title>
            </StyledServiceLink>
        </>
    );
};
export default ServiceLink;