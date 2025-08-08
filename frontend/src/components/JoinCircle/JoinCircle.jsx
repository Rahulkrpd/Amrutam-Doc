import React, { useState } from 'react';
import SliderContent from './SliderContent';

const JoinCircle = () => {
    const [hoveredStep, setHoveredStep] = useState(null);

    const steps = [
        {
            id: 1,
            title: "Step 1: Get your referral code",
            desc: "Contact us to receive your unique referral code.",
            image: "./Group 1000006308.svg",
        },
        {
            id: 2,
            title: "Step 2: Register on Amrutam",
            desc: "Sign up on the Amrutam Doctors app or website to join our specialist network.",
            image: "./Joinus2.svg",
        },
        {
            id: 3,
            title: "Step 3: Complete KYC",
            desc: "Fill in your details and upload the required documents for verification.",
            image: "./Joinus3.svg",
        },
        {
            id: 4,
            title: "Step 4: Start consulting",
            desc: "Once verified, begin offering consultations and helping patients.",
            image: "./Joinus4.svg",
        },
    ];

    const currentImage = hoveredStep
        ? steps.find((s) => s.id === hoveredStep)?.image
        : steps[0].image;

    return (
        <>
            <div className='w-full  bg-[#FFF7E2] font-dm flex flex-col items-center px-4 py-10 '>
                {/* Heading */}
                <div className='text-center mb-10'>
                    <h1 className='text-3xl text-[#33643F] font-bold'>Join Our Circle of Care</h1>
                    <p className="text-[#666] mt-1">Becoming a part of Amrutam is simple</p>
                </div>

                {/* Steps + Image */}
                <div className='w-4/5 max-w-6xl flex flex-col lg:flex-row items-start gap-10'>
                    {/* Left Steps */}
                    <div className='w-full lg:w-1/2 flex flex-col gap-5'>
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                onMouseEnter={() => setHoveredStep(step.id)}
                                onMouseLeave={() => setHoveredStep(null)}
                                className={`border transition-all duration-300 ease-in-out cursor-pointer rounded-lg px-5 py-4
                                ${hoveredStep === step.id
                                        ? 'bg-[#3A643C] text-white shadow-lg scale-[1.02]'
                                        : 'bg-[#FFF7E2] text-[#3A643C] hover:bg-[#3A643C] hover:text-white'
                                    } border-[#3A643C]`}
                            >
                                <h2 className='text-lg font-semibold'>{step.title}</h2>
                                <p className='text-sm'>{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right Image - Static */}
                    <div className='w-full lg:w-1/2 relative flex justify-center items-center'>
                        <img
                            src="./joinusBg.svg"
                            alt="Background Shape"
                            className="w-full max-w-md"
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-3/4">
                            <img
                                key={currentImage}
                                src={currentImage}
                                alt="Step visual"
                                className="w-full object-contain animate-fade-in-up"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Slider */}
            <SliderContent />
        </>
    );
};

export default JoinCircle;
