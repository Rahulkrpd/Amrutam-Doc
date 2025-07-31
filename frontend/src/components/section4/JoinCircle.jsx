import React, { useState } from 'react';

const JoinCircle = () => {
    const [hoveredStep, setHoveredStep] = useState(); // Default to Step 1

    const steps = [
        {
            id: 1,
            title: "Step 1: Get your referral code",
            desc: "Contact us to receive your unique referral code.",
            image: "./Joinus1.svg",
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

    return (
        <div className='min-w-screen min-h-screen bg-[#FFF7E2] font-dm flex flex-col justify-center items-center space-y-5'>
            <div>
                <h1 className='text-3xl text-[#33643F]'>Join Our Circle of Care</h1>
                <p>Becoming a part of Amrutam is simple</p>
            </div>

            <div className='w-4/5 justify-around border-2 flex'>
                {/* Left Side */}
                <div className='w-2/5 flex flex-col justify-between items-center space-y-4'>
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            onMouseEnter={() => setHoveredStep(step.id)}
                            className={`w-full h-28 border transition duration-300 ease-in-out ${hoveredStep === step.id
                                    ? 'bg-[#3A643C] text-white'
                                    : 'text-[#3A643C] hover:bg-[#3A643C] hover:text-white'
                                } border-[#3A643C] flex flex-col justify-center items-start p-4 space-y-2 rounded-xl cursor-pointer`}
                        >
                            <h1 className='text-2xl font-bold'>{step.title}</h1>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Right Side */}
                <div className='w-2/5 relative'>
                    <img src="./joinusBg.svg" alt="bg" className='relative top-16' />
                    <img
                        src={steps.find((s) => s.id === hoveredStep)?.image}
                        alt="Step Visual"
                        className='absolute top-0 left-0 w-full h-full object-contain'
                    />
                </div>
            </div>
        </div>
    );
};

export default JoinCircle;
