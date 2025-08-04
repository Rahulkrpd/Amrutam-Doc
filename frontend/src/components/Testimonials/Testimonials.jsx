import React from 'react'

const Testimonials = () => {
    return (
        <div className='w-full  bg-[#FFF7E2] flex  flex-col justify-center items-center space-y-5'>
            {/* upper div */}
            <div className='w-full flex flex-col justify-center items-center space-y-2'>
                <div className=''>
                    <h1 className='text-[#33643F] font-bold text-2xl md:text-3xl '>What other Ayurvedic Doctors are Saying</h1>
                </div>
                <div>
                    <p className='text-[#4C4C4C]'>Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!</p>
                </div>
            </div>

            {/* lower div */}

            <div className='w-full justify-around flex'>
                <div className='hidden md:flex '>
                    <img src="./Frame 1171275448.svg" alt="testominal"  className=''/>
                </div>
                <div className=''>
                    <img src="./Frame 1171275448.svg" alt="testominal" className='md:w-[480px]' />
                </div>
                <div className='hidden md:flex'>
                    <img src="./Frame 1171275448.svg" alt="testominal" />
                </div>

            </div>

        </div>
    )
}

export default Testimonials
