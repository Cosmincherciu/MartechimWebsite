import React, { useState } from 'react'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import { sliderData } from './slider-data'
import "./Slider.scss";


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = sliderData.length;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    }
    const prevSlide = () => {}

  return (
    <div className='slider'>
        <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide} />
        <AiOutlineArrowRight className='arrow next' onClick={nextSlide} />

        {sliderData.map((slide, index) => {
            const {image, heading, desc} = slide
            return (
                <div key={index} className={index === currentSlide ? "slide current" : "slide"}>
                    {index ===  currentSlide && (
                        <>
                            <img src={image} alt="slide"></img>
                            <div className='content'>
                                <h2>{heading}</h2>
                                <p>{desc}</p>
                                <hr />
                                <a href='#products' className='--btn --btn-primary'>
                                    Read More
                                </a>
                            </div>
                        </>
                    )}
                </div>
            )
        })}
    </div>
  )
}

export default Slider
