import styled from 'styled-components';
import WebsitePreviewTextContent from '../../components/containers/websitePreviewTextContent';
import Title from '../../components/title/Title';
import Button from '../../components/button/button';

const StylednotFound = styled.div`
    height: ${props => props.height || '100vh'};
    width: ${props => props.width || '100vw'};
    background-color: rgb(241, 241, 239);
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
`

const NotFound = (props) => {
    
    return (
        <>
        <StylednotFound onClick={() => window.history.back()} {...props}>
                <Title  width ={'80vw'} marginBot={'50px'}>Извините, данная страница находиться в разработке...</Title>
                <Button>← Назад</Button>
        </StylednotFound>
        </>
    );
};
export default NotFound;