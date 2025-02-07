import styled from 'styled-components';
import Subtitle from '../subtitle/Subtitle';
import Description from '../description/Description';
import Title from '../title/Title';


const StyledProcessServiceContentBlockContent = styled.div`
    display: flex;
    aspect-ratio: 5/8;
    width: 22%;
    margin: 1%;
    background-color: white;
    max-width: 308px;
    min-width: 270px;
    position: relative;
    
`
const StyledProcessServiceContent = styled.h1`
    justify-content: center;
    position: relative;
    width: 100%;
    flex-direction: column;
`
const StyledProcessServiceContentText = styled.div`
    display: inline-block;
    text-align: center;
    width: 100%;
`

const ProcessServiceContentBlockContent = (props) => {
    
    return ( 
        <StyledProcessServiceContentBlockContent {...props}>
            <StyledProcessServiceContent>
            <StyledProcessServiceContentText>
                <Subtitle >{props.num}</Subtitle>
            </StyledProcessServiceContentText>
            <Title padding={'7px'} color={'black'} fontSize={'3px'}>{props.title}</Title>
            <Description padding={'7px'} fontStyle={'normal'} fontSize={'4px'}>{props.description}</Description>
            </StyledProcessServiceContent>
        </StyledProcessServiceContentBlockContent>

        
    );
};
export default ProcessServiceContentBlockContent;