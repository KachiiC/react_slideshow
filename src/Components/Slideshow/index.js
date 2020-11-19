import React, { useState } from 'react';
// Data
import slideData from 'Data/slideData'

import './styles.css';

const Slideshow = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const prevSlide = () => {
        (slideIndex === 0) ? 
            setSlideIndex(slideData.length - 1): 
        setSlideIndex(prevSlide => prevSlide - 1)
    }

    const nextSlide = () => {
        (slideIndex === slideData.length - 1) ? 
            setSlideIndex(0): 
        setSlideIndex(prevSlide => prevSlide + 1)
    }

    return (
        <section className="slideshow">
            <h1>{slideData[slideIndex].title}</h1>
            <button onClick={prevSlide}>previous</button>
            <img src={slideData[slideIndex].image} alt="placeholder"/>
            <button onClick={nextSlide}>next</button>
        </section>
    )
}

export default Slideshow