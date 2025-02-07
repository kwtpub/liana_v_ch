import styled from 'styled-components';
import Subtitle from '../subtitle/Subtitle';
import { Carousel2 } from '../carousel-base copy/carousel';
import { Carousel } from '../carousel-base/carousel';
import { Carousel3 } from '../carousel-base copy 2/carousel3';
import ProcessServiceContentBlockContent from './StyledProcessServiceContentBlockContent';

const StyledProcessService = styled.div`
    padding-top: ${props => props.paddingTB || '18px' };
    padding-bottom: ${props => props.paddingTB || '18px' };
    padding-left: ${props => props.paddingLR || '1em' };
    padding-right:${props => props.paddingLR || '1em' } ;
    background-color: rgb(241, 241, 239);
    height: calc(100% + 200px);
    display: flex;
    flex-direction: column;
    
`
const StyledProcessServiceContent = styled.div`
    flex-direction: column;
    padding-top: ${props => props.paddingTB || '100px' };
    padding-bottom: ${props => props.paddingTB || '100px' };
    padding-left: ${props => props.paddingLR || '18px' };
    padding-right:${props => props.paddingLR || '18px' } ;
    background-color: rgb(241, 241, 239);
    height: 100%;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    display: flex;
    justify-content: center;
    position: relative;
`
const StyledProcessServiceContentText = styled.div`
    display: inline-block;
    text-align: center;
`

const StyledProcessServiceContentBlock = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    position: relative;
`
// const StyledProcessServiceContentBlockContent = styled.div`
//     display: flex;
//     aspect-ratio: 5/8;
//     width: 22%;
//     margin: 1%;
//     background-color: white;
//     max-width: 308px;
//     min-width: 195px;
//     position: relative;
// `

const ProcessService = (props) => {
    
    return (
        <StyledProcessService {...props}>
            <StyledProcessServiceContent>

                <StyledProcessServiceContentText>
                    <Subtitle jContent={''}>The Process</Subtitle>
                </StyledProcessServiceContentText>

                
                    <StyledProcessServiceContentBlock>
                        <Carousel3>
                        <ProcessServiceContentBlockContent num={'1'} title={'ВСТРЕЧА - ЗНАКОМСТВО'} description={'Вы рассказываете о своих пожеланиях: какой стиль вам близок, какие вещи хотите найти (например, повседневная одежда, образ для особого случая, базовый гардероб). Я задаю уточняющие вопросы: ваш размер, любимые цвета, материалы, бюджет, предпочитаемые бренды или магазины. Мы обсуждаем, как будет проходить шопинг: в каких магазинах, сколько времени займет, какие акценты сделать.'}/>
                        <ProcessServiceContentBlockContent num={'2'} title={'ПРЕШОПИНГ'} description={'Я посещаю магазины (или изучаю их ассортимент онлайн) и отбираю вещи, которые соответствуют вашим пожеланиям, размеру и стилю. Составляю комплекты: например, верх + низ + аксессуары, чтобы вы могли сразу увидеть, как вещи сочетаются между собой. Откладываю выбранные вещи в примерочных или сохраняю ссылки на них, если это онлайн-шопинг.'}/>
                        <ProcessServiceContentBlockContent num={'3'} title={'СОВМЕСТНЫЙ ШОППИНГ'} description={'Мы встречаемся в магазине (или связываемся онлайн), и я показываю вам заранее отобранные вещи и комплекты.Вы примеряете вещи, а я даю обратную связь: что сидит идеально, что можно улучшить, как комбинировать с другими предметами гардероба.'}/>
                        <ProcessServiceContentBlockContent num={'4'} title={'ВОПРОСЫ / РЕКОМЕНДАЦИИ'} description={'Отвечаю на ваши вопросы: например, как ухаживать за вещью, с чем ее носить, стоит ли брать. Если что-то не подошло, я оперативно подбираю альтернативы.'}/>
                        </Carousel3>
                    </StyledProcessServiceContentBlock>
                
            </StyledProcessServiceContent>
        </StyledProcessService>
    );
};
export default ProcessService;