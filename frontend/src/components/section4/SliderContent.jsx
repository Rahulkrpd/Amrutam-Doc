import React, { useState } from 'react'

const SliderContent = () => {

    const [btnState, setBtnState] = useState(1)

    const buttonContent = [
        {
            id: 1,
            title: "Consultations",

        },
        {
            id: 2,
            title: "Payment withdrawal"
        }, {
            id: 3,
            title: "Schedule"
        }
    ]


    return (
        <div className='bg-[#FFF7E2] min-w-screen min-h-screen py-5 '>
            <div className=' border-solid flex flex-col justify-center items-center '>
                {/* upper div */}
                <div className='w-2/5 gap-3 flex justify-between'>
                    {buttonContent.map((btn) => (
                        <button
                            key={btn.id}
                            onClick={() => setBtnState(btn.id)}
                            className={`w-80  p-4  rounded-xl font-medium transition-all duration-300 ease-in-out
                                                    ${btnState === btn.id
                                    ? 'bg-[#3A643C] text-white'
                                    : 'bg-transparent text-[#3A643C] border border-[#3A643C] opacity-1/2 '} `}
                        >
                            {btn.title}
                        </button>

                    ))}
                </div>


                {/* lower div */}
                <div className='mt-30  w-4/5 justify-around flex  '>
                    {/* first phone */}
                    <div className='w-1/4   gap-2  space-y-2 flex flex-col justify-center items-center '>
                        <div className='text-xl text-[#3A643C] font-bold
                        '>Value Your Practice</div>
                        <div><img src="./iphone 15.svg" alt="" className='h-11/12' /></div>
                    </div>

                    {/* Second phone */}
                    <div className='w-1/4  gap-2  relative bottom-14 space-y-2 flex flex-col justify-center items-center '>
                        <div><img src="./iphone 15.svg" alt="" className='h-11/12' /></div>
                        <div className='text-xl text-[#3A643C] font-bold
                        '>Value Your Practice</div>

                    </div>

                    {/* Third phone */}
                    <div className='w-1/4   gap-2  space-y-2 flex flex-col justify-center items-center '>
                        <div className='text-xl text-[#3A643C] font-bold
                        '>Value Your Practice</div>
                        <div><img src="./iphone 15.svg" alt="" className='h-11/12' /></div>
                    </div>

                </div>
                <button className="bg-[#3A643C] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#325932] transition">
                    Join Now
                </button>
            </div>

        </div>
    )
}

export default SliderContent
