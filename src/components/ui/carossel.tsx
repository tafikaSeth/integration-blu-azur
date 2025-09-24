import React, { useState } from "react";
import type { CarouselProps } from "../../types";
import { ICONS } from "../../constants/icon-svg";


const Caroussel: React.FC<CarouselProps> = ({ images, visibleSlides = 2, height = 220 }) => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        if (current > 0) setCurrent((prev) => prev - 1);
    };

    const nextSlide = () => {
        const maxCurrent = images.length - visibleSlides;
        if (current < maxCurrent) {
            setCurrent((prev) => prev + 1);
        }
    };

    return (
        <div
            className="relative w-full overflow-hidden"
            style={{ '--carousel-height': `${height}px` } as React.CSSProperties}
        >
            {current > 0 && (
                <button
                    onClick={prevSlide}
                    className="absolute left-20 top-1/2 -translate-y-1/2 z-10 border-1 border-white p-2 rounded-full shadow-md"
                >
                    {ICONS.prev}
                </button>
            )}

            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * (100 / visibleSlides)}%)` }}
            >
                {images.map((img, index) => {
                    const isVisible = index >= current && index < current + visibleSlides;

                    return (
                        <div
                            key={index}
                            className="flex-shrink-0 flex items-center justify-center px-2"
                            style={{ width: `${100 / visibleSlides}%` }}
                        >
                            <img
                                src={img}
                                alt={`slide-${index}`}
                                className={`
                                    w-full h-[180px] md:h-[var(--carousel-height)] 
                                    object-cover rounded-xl 
                                    transition-all duration-500 ease-in-out
                                    ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-10'}
                                `}
                            />
                        </div>
                    );
                })}
            </div>

            {current < images.length - visibleSlides && (
                <button
                    onClick={nextSlide}
                    className="absolute right-20 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-md border-1 border-white"
                >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            )}

        </div>

    );
};

export default Caroussel;