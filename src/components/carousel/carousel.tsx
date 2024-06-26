import React, { ReactElement, ReactNode, useState } from 'react';
import Slide from './slide/slide';
import SlideButton from './slideButton/slideButton';
import { carouselProps } from './props';
import "./styles.scss";

const Carousel = ({ slides }: carouselProps ) => {
    const [slideNumber, setSlideNumber] = useState( 0 );

    const handleDecrement = () => {
        slideNumber > 0 && setSlideNumber(prevSlideNumber => prevSlideNumber - 1);
    }

    const handleIncrement = () => {
        slideNumber < slides.length - 1 && setSlideNumber(prevSlideNumber => prevSlideNumber + 1);
    }

    const resetSlideNumber = () => {
        setSlideNumber( 0 );
    }

    return (
        <>
            <div className='navigation-container'>
                <div className='decrement'>
                    <SlideButton 
                        value='&lt;'
                        buttonFunction={ handleDecrement }
                    />
                </div>
                <div className='increment'>
                    <SlideButton 
                        value='&gt;'
                        buttonFunction={ handleIncrement }
                    />
                </div>
            </div>
            <div className='carousel-container'>
                <div className='slide-container'>
                    { slides[slideNumber] && <Slide slideInfo={ slides[slideNumber] } /> }
                </div>
            </div>
    </>
    )
}

export default Carousel;