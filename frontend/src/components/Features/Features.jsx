import React from 'react'

const Features = () => {
    return (
        <div className='w-full h-72 bg-[#FFF8E6] flex flex-col justify-center items-center space-y-5 px-4'>
            <h1 className='text-[#33643F] font-semibold text-2xl md:text-4xl text-center'>Featured </h1>
            <p className='text-[#4C4C4C] text-center px-4'>Recognized and celebrated by leading publications – Amrutam in the spotlight!</p>
            
            <div className="w-full flex justify-center">
                <img src="./FeaturedName.svg" alt="" className="max-w-full h-auto" />
            </div>
        </div>
    )
}

export default Features
