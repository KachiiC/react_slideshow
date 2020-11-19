import React, { useState } from 'react';
// Data
import slideData from 'Data/slideData'
// CSS
import './styles.css';
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
        <div className="slideshows">
            <h1>{slideData[slideIndex].title}</h1>
            <div className="slideshow-row">
                <FontAwesomeIcon icon={faAngleDoubleLeft} 
                    onClick={prevSlide} 
                    className="btn-container"
                />
                <img src={slideData[slideIndex].image} 
                    className="" 
                    alt="slider"
                />
                <FontAwesomeIcon icon={faAngleDoubleRight} 
                    onClick={nextSlide} 
                    className="btn-container"
                />
            </div>
            <h2>What is {slideData[slideIndex].title}?</h2>
            <div className="fight-strat-description">
                <p>{slideData[slideIndex].description}</p>
                <p><b>Notable users:</b> {slideData[slideIndex].noteable_examples}</p>
            </div>
        </div>
    )
}

export default Slideshow