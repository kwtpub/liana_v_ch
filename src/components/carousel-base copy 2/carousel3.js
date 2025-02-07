import { useEffect, useState, Children, cloneElement} from 'react'

import './carousel3.css'

const PAGE_WIDTH = 40;


export const Carousel3 = ({children, infinite}) => {
    const [pages,setPages] = useState([])
    const [offset,setOffset] = useState(0)


        const handleLeftArrowClick = () => {


            setOffset((currentOffset = 0) => {

                const newOffset = currentOffset + PAGE_WIDTH;
                
            return Math.min(newOffset, 0)
            })
        }

        const handleRightArrowClick = () => {
            
            setOffset((currentOffset = 0) => {
                
                let newOffset = currentOffset - PAGE_WIDTH;

                const maxOffset = -(PAGE_WIDTH * (pages.length - 1  ))


                console.log(newOffset)
            return Math.max(newOffset, maxOffset)
            })
        }
    useEffect(() => {
setPages(

    Children.map(children, (child) => {
        return cloneElement(child, {
            style: {
                height: '100%',
            },
        })
    })
    )
}, [])
    return (
        <div className="main-container3">

            

            <div className="window3">
            <div className="arrow1" onClick={handleLeftArrowClick} ></div>
                <div className="all-pages-container3"
                
                style={{
                    transform: `translateX(${offset}%)`,
                }}

                >{pages}</div>
            <div className="arrow2" onClick={handleRightArrowClick} ></div>
            </div>


        </div>
    )
}