import { useEffect, useState, Children, cloneElement} from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

import './carousel.css'

const PAGE_WIDTH = 50;


export const Carousel = ({children, infinite}) => {
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

                const maxOffset = -(PAGE_WIDTH * (pages.length - 1 ))


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
                minWidth: `${PAGE_WIDTH}%`,
                maxWidth: `${PAGE_WIDTH}%`, 
            },
        })
    })
    )
}, [])
    return (
        <div className="main-container">
            {/* <img className='arrow1' src="__photos/Arrow.svg" alt="arrow" onClick={handleLeftArrowClick} /> */}
            <div className="arrow1" onClick={handleLeftArrowClick} ></div>

            <div className="window">
                <div className="all-pages-container"
                
                style={{
                    transform: `translateX(${offset}%)`,
                }}

                >{pages}</div>

            </div>
            <div className="arrow2" onClick={handleRightArrowClick} ></div>
            {/* <img className='arrow2'src="__photos/Arrow.svg" alt="arrow" onClick={handleRightArrowClick} /> */}

        </div>
    )
}