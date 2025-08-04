import React, { useState } from 'react';
import SliderContent from './SliderContent';

const JoinCircle = () => {
    const [hoveredStep, setHoveredStep] = useState(null); // null for default

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
            <div className='min-w-screen min-h-screen bg-[#FFF7E2] font-dm flex flex-col justify-center items-center space-y-5 '>
                {/* Heading */}
                <div className='text-center'>
                    <h1 className='text-3xl text-[#33643F] font-bold'>Join Our Circle of Care</h1>
                    <p className="text-[#666] mt-1">Becoming a part of Amrutam is simple</p>
                </div>

                {/* Steps + Image */}
                <div className='w-4/5 flex justify-around items-start bg-[#FFF7E2]  overflow-hidden'>
                    {/* Left Step Cards */}
                    <div className='w-2/5 flex flex-col gap-5 py-6'>
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                onMouseEnter={() => setHoveredStep(step.id)}
                                onMouseLeave={() => setHoveredStep(null)}
                                className={`w-full h-28 border transition-all duration-300 ease-in-out cursor-pointer rounded-lg px-5 py-3 flex flex-col justify-center space-y-1
                                ${hoveredStep === step.id
                                        ? 'bg-[#3A643C] text-white shadow-lg scale-[1.02]'
                                        : 'bg-#FFF7E2 text-[#3A643C] hover:bg-[#3A643C] hover:text-white'
                                    } border-[#3A643C]`}
                            >
                                <h2 className='text-xl font-semibold'>{step.title}</h2>
                                <p className='text-sm'>{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right Image */}
                    <div className='w-2/5 relative'>
                        <img
                            src="./joinusBg.svg"
                            alt="Background Shape"
                            className='relative top-16 z-0 w-full h-auto'
                        />
                        <div className="absolute top-40 left-0 w-full h-full flex items-center justify-center z-10">
                            <img key={currentImage}
                                src={currentImage} alt="group " className="w-full h-full object-contain opacity-100 animate-fade-in-up" />
                        </div>
                    </div>
                </div>



            </div>
            <SliderContent />



        </>
    );
};

export default JoinCircle;
