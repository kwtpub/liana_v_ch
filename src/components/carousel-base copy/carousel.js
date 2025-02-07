import { useEffect, useState, Children, cloneElement} from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

import './carousel2.css'

const PAGE_WIDTH = 50;


export const Carousel2 = ({children, infinite}) => {
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
                height: '80%',
                minWidth: `${PAGE_WIDTH}%`,
                maxWidth: `${PAGE_WIDTH}%`, 
            },
        })
    })
    )
}, [])
    return (
        <div className="main-container1">
            {/* <img className='arrow1' src="__photos/Arrow.svg" alt="arrow" onClick={handleLeftArrowClick} /> */}
            <div className="window1">
                <div className="all-pages-container1"
                
                style={{
                    transform: `translateX(${offset}%)`,
                }}

                >{pages}</div>

            </div>
            <div className="arrow-container">
              <div className="arrow3" onClick={handleLeftArrowClick} ></div>
              <div className="arrow4" onClick={handleRightArrowClick} ></div>
            </div>
            
            {/* <img className='arrow2'src="__photos/Arrow.svg" alt="arrow" onClick={handleRightArrowClick} /> */}

        </div>
    )
}