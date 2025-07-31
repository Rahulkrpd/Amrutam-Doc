import React, { useState, useRef } from 'react';
import RotatingText from '../../animations/RotatingText';


const DisplayDoc = () => {
    const texts = ['Grow Your Practice', 'Reach More Patients', 'Enhance Expertise'];
    const [textIndex, setTextIndex] = useState(0);
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        timeoutRef.current = setTimeout(() => {
            intervalRef.current = setInterval(() => {
                setTextIndex(prev => (prev + 1) % texts.length);
            }, 1000); // text change speed
        }, 1500); // delay before changing
    };

    const handleMouseLeave = () => {
        clearTimeout(timeoutRef.current);
        clearInterval(intervalRef.current);
        timeoutRef.current = null;
        intervalRef.current = null;
        setTextIndex(0); // reset to default
    };

    return (
        <main className="max-w-screen h-auto lg:bg-gradient-to-r lg:from-[#FFE6A5] to-[#FFE6A5] py-5 px-6 md:px-20">
            <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

                {/* Left Content */}
                <div className="flex-1 space-y-6 h-1/2 mt-20">
                    <p className="text-[#666666] text-lg">Namaste, Welcome to Amrutam</p>

                    {/* Animated Title */}
                    <h1
                        className="text-xl md:text-3xl cursor-pointer font-bold text-[#1E1E1E] transition-all duration-700 ease-in-out overflow-hidden h-10 relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Join Amrutam –{' '}
                        <span
                            key={textIndex}
                            className="text-[#3A643C] absolute animate-slide-up transition-all duration-700 ease-in-out"
                        >
                            {texts[textIndex]}
                        </span>
                    </h1>

                    <p className="text-[#4D4D4D] text-base md:text-lg">
                        Connect with more patients, set your own schedule, and grow your Ayurvedic practice effortlessly.
                    </p>
                    <button className="bg-[#3A643C] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#325932] transition">
                        Join Now
                    </button>

                    {/* Stats */}
                    <div className="flex gap-10 pt-8">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold">500+</h2>
                            <p className="text-[#4D4D4D] text-sm">Average Active Users</p>
                        </div>
                        <div className="border-l border-[#999] h-auto"></div>
                        <div className="text-center">
                            <h2 className="text-2xl font-bold">40+</h2>
                            <p className="text-[#4D4D4D] text-sm">Average daily free calls</p>
                        </div>
                    </div>
                </div>

                {/* Right Side Images */}
                <div className="hidden lg:flex flex-1 relative justify-center items-center">
                    <img src="./Group.svg" alt="doctors" className="relative z-10 w-full max-w-[40%] md:max-w-3/4" />
                    <img src="./FrameYoga.svg" alt="icon1" className="absolute top-8 right-10 lg:w-15 xl:w-24 h-auto z-20" />
                    <img src="./FrameBag.svg" alt="icon2" className="absolute bottom-8 right-16 lg:w-15 xl:w-24 h-auto z-20" />
                    <img src="./FrameCup.svg" alt="icon3" className="absolute bottom-2 left-20 lg:w-15 xl:w-24 h-auto z-20" />
                </div>
            </div>
        </main>
    );
};

export default DisplayDoc;
