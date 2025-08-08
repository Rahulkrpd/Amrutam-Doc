

const Testimonials = () => {
    return (
        <div className='w-full bg-[#FFF7E2] flex flex-col justify-center items-center space-y-6 px-4 py-10'>
            {/* upper div */}
            <div className='w-full flex flex-col justify-center items-center space-y-2'>
                <div className='text-center'>
                    <h1 className='text-[#33643F] font-bold text-2xl md:text-3xl'>What other Ayurvedic Doctors are Saying</h1>
                </div>
                <div className='text-center'>
                    <p className='text-[#4C4C4C]'>Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!</p>
                </div>
            </div>

            {/* lower div */}
            <div className='w-4/5 justify-around flex flex-col md:flex-row items-center gap-4 '>
                <div className='hidden md:flex  md:w-3/5'>
                    <img src="./Frame 1171275448.svg" alt="testominal" className='w-90' />
                </div>
                <div className='w-full flex justify-center'>
                    <img src="./Frame 1171275448.svg" alt="testominal" className='w-9/12' />
                </div>
                <div className='hidden md:flex md:w-3/5'>
                    <img src="./Frame 1171275448.svg" alt="testominal" className='w-90' />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
