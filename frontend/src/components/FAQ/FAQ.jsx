import React from 'react'
import Accordin from './Accordin'

const FAQ = () => {
    return (
        <div className='w-full bg-[#FFF7E2] flex flex-col justify-center items-center py-20 '>
            {/* upper div */}
            <div className='w-full flex justify-center flex-col  items-center'>
                <div><h1 className='text-[#33643F] font-bold text-2xl md:text-3xl '>Frequently Asked Questions</h1></div>
                <div>
                    <p className='text-[#4C4C4C]'>Find quick answers to common questions to help you navigate the app and its features easily.</p>

                </div>
            </div>

            {/* lower div */}
            <div className=' w-full'>
                <Accordin />
            </div>


            <div className="bg-[#3A643B] text-white rounded-xl w-36 flex justify-center items-center p-3  mt-10">
                <button className="text-sm font-medium">See more</button>

            </div>
        </div>
    )
}

export default FAQ
