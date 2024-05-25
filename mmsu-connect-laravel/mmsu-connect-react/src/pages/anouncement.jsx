import React, { useState, useEffect, useRef } from "react";

const slides = [
    "Slide 1: Welcome to our site",
    "Slide 2: Learn more about our services",
    "Slide 3: Check out our portfolio",
    "Slide 4: Contact us for more information",
];

const Navbar = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideInterval = useRef(null);

    useEffect(() => {
        startSlideShow();

        return () => {
            stopSlideShow();
        };
    }, []);

    const startSlideShow = () => {
        slideInterval.current = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds
    };

    const stopSlideShow = () => {
        if (slideInterval.current) {
            clearInterval(slideInterval.current);
        }
    };

    const goToPreviousSlide = () => {
        stopSlideShow();
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
        startSlideShow();
    };

    const goToNextSlide = () => {
        stopSlideShow();
        setCurrentSlide((currentSlide + 1) % slides.length);
        startSlideShow();
    };

    return (
        <div className="relative overflow-hidden w-full h-64 flex items-center justify-center bg-green-900 text-white">
            <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="w-full flex-shrink-0 flex items-center justify-center h-64 text-2xl"
                    >
                        {slide}
                    </div>
                ))}
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <button className="btn btn-ghost" onClick={goToPreviousSlide}>
                    ❮
                </button>
                <button className="btn btn-ghost" onClick={goToNextSlide}>
                    ❯
                </button>
            </div>
        </div>
    );
};

export default Navbar;
