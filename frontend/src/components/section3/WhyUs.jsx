

const WhyUs = () => {
    return (
        <div className='max-w-screen  bg-[#FFF7E2] min-h-screen flex flex-col justify-center items-center space-y-20'>

            <div className='space-y-3  flex justify-center flex-col items-center '>
                <h1 className='text-2xl md:text-4xl text-[#3A643C] font-semibold'>Why Doctors Choose Us?</h1>
                <p className='text-[#4C4C4C] font-semibold text-center lg:text-xl '>Unlock the Benefits of Smarter Healthcare Management and Patient Care</p>
            </div>
            {/* lower content */}
            <div className="max-w-full space-y-10">

                {/* one of them text are of people */}
                <div className='m-20 p-10 md:flex md:justify-around md:items-center  '>
                    {/* Imaage  */}
                    <div className="w-1/2 ">
                        <img src="./phone.svg" alt="phone" className="relative top-14 left-22" />
                        <img src="./Groupmessage.svg" alt="" className='w-full h-auto' />
                    </div>
                    {/* message */}
                    <div className='w-1/3'>
                        <h2 className='text-[#3A643C] font-semibold md:text-4xl'>Instant FREE 5-Mins Call</h2>
                        <p className='text-[#666666] font-dm '>We understand the importance of building trust with your patients. That’s why Amrutam offers a free 5-minute call, helping you connect instantly and foster lasting patient relationships with ease.</p>
                    </div>

                </div>

                <div className='m-20 p-10 md:flex md:justify-around md:items-center '>

                    {/* message */}
                    <div className='w-1/3'>
                        <h2 className='text-[#3A643C] font-semibold md:text-3xl'>Forum for Meaningful Connections</h2>
                        <p className='text-[#666666] font-dm '>We value your journey in Ayurveda .The Amrutam Forum helps you engage with patients, answer questions, while the "Thoughts" section allows you to share deeper Ayurvedic wisdom.</p>
                    </div>
                    {/* Imaage  */}
                    <div className="w-1/2">
                        <img src="./Groupmessage 2.svg" alt="" className='w-full h-auto' />
                    </div>
                </div>

                {/* third */}
                <div className='m-20 p-10 md:flex md:justify-between md:items-center border-2 border-purple-600'>
                    {/* Left Section */}
                    <div className="w-1/2 border-2 border-solid border-red-800 space-y-4">

                        {/* Overlapping Icon */}
                        <div className="relative w-28 h-24 top-40 left-8/12 ">
                            <img src="./Ellipse.svg" alt="background" className="absolute w-full h-full z-0" />
                            <img src="./Frame 1000006905.svg" alt="frame" className="absolute inset-0 m-auto z-10" />
                        </div>

                        {/* Message Card */}
                        <img src="./Groupmessage 3.svg" alt="user details" className='w-full h-auto' />
                    </div>

                    {/* Right Section */}
                    <div className='w-1/3'>
                        <h2 className='text-[#3A643C] font-semibold md:text-4xl mb-4'>Choose Your Session Mode</h2>
                        <p className='text-[#666666] font-dm'>Amrutam offers you to connect with patients via Instant Chat, Instant Call, or Schedule Video call. Each option offers flexibility and personalized care to suit individual needs.</p>
                    </div>
                </div>


                {/* fourth */}
                <div className='m-20 p-10 md:flex md:justify-around md:items-center border-2 border-purple-600 '>

                    {/* message */}
                    <div className='w-1/3'>
                        <h2 className='text-[#3A643C] font-semibold md:text-4xl'>Smart Wallet</h2>
                        <p className='text-[#666666] font-dm '>We understand the need for seamless transactions. With Amrutam Wallet, you can easily withdraw payments, and for your security, a one-time password is sent to your registered mobile number during withdrawals.</p>
                    </div>

                    {/* Imaage  */}
                    <div className="w-1/2">


                        <img src="./Groupmessage4.svg" alt="" className='w-full h-auto' />
                    </div>

                </div>

                {/* fifth */}
                <div className='m-20 p-10 md:
                flex md:justify-between md:items-center border-2 border-purple-600 '>
                    {/* Imaage  */}

                    <div className="w-1/3">
                        <div className="relative w-28 h-24 top-20 left-8/12 ">
                            <img src="./Ellipse.svg" alt="background" className="absolute w-full h-full z-0" />
                            <img src="./work-history-solid-standard 1.svg" alt="frame" className="absolute inset-0 m-auto z-10" />
                        </div>
                        <img src="./Group5.svg" alt="" className='w-full h-auto' />
                        <img src="./Frame 5.svg" alt="" className="relative left-65 bottom-30" />
                    </div>
                    {/* message */}
                    <div className='w-1/3'>
                        <h2 className='text-[#3A643C] font-semibold md:text-4xl'>Flexible Work Timing</h2>
                        <p className='text-[#666666] font-dm '>We recognize the importance of managing your time. With the availability toggle in the doctor’s app, you control when patients can book consultations, ensuring a balanced and stress-free practice.</p>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default WhyUs
