

const WhyUs = () => {
    return (
        <div className='min-w-screen  bg-[#FFF7E2] min-h-screen flex flex-col justify-center items-center space-y-20'>

            <div className='space-y-3  flex justify-center flex-col items-center '>
                <h1 className='text-2xl md:text-4xl text-[#3A643C] font-semibold'>Why Doctors Choose Us?</h1>
                <p className='text-[#4C4C4C] font-semibold text-center lg:text-xl '>Unlock the Benefits of Smarter Healthcare Management and Patient Care</p>
            </div>
            {/* lower content */}
            <div className="max-w-full space-y-10">

                {/* one of them text are of people */}
                <div className="m-5 md:m-20 p-5 md:p-10 flex flex-col md:flex-row justify-around items-center gap-10">
                    {/* Image */}
                    <div className="w-full md:w-1/2 flex flex-col items-center relative md:top-10">
                        <img
                            src="./phone.svg"
                            alt="phone"
                            className="w-24 h-24 md:w-32 md:h-32 relative top-10 left-6 md:left-20"
                        />
                        <img src="./Groupmessage.svg" alt="message group" className="w-full h-auto mt-6 md:mt-10" />
                    </div>

                    {/* Message */}
                    <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                        <h2 className="text-[#3A643C] font-semibold text-2xl md:text-4xl">
                            Instant FREE 5-Mins Call
                        </h2>
                        <p className="text-[#666666] font-dm text-sm md:text-base">
                            We understand the importance of building trust with your patients. That’s why Amrutam offers a free 5-minute call, helping you connect instantly and foster lasting patient relationships with ease.
                        </p>
                    </div>
                </div>

                {/* second */}
                <div className="m-5 md:m-20 p-5 md:p-10 flex flex-col md:flex-row justify-around items-center gap-10">
                    {/* Message */}
                    <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                        <h2 className="text-[#3A643C] font-semibold text-2xl md:text-3xl">
                            Forum for Meaningful Connections
                        </h2>
                        <p className="text-[#666666] font-dm text-sm md:text-base">
                            We value your journey in Ayurveda. The Amrutam Forum helps you engage with patients, answer questions, while the "Thoughts" section allows you to share deeper Ayurvedic wisdom.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img src="./Groupmessage 2.svg" alt="Forum Illustration" className="w-full h-auto max-w-[600px]" />
                    </div>
                </div>


                {/* third */}
                <div className="m-5 md:m-20 p-5 md:p-10 flex flex-col-reverse md:flex-row justify-between items-center gap-10">
                    {/* Left Section */}
                    <div className="w-full md:w-1/2 relative flex flex-col items-center md:items-start">
                        {/* Overlapping Icon */}
                        <div className="absolute -top-10 left-1/2 md:left-[30%] transform -translate-x-1/2 md:translate-x-0">
                            <img src="./Ellipse.svg" alt="background" className="w-24 h-24 z-0" />
                            <img
                                src="./Frame 1000006905.svg"
                                alt="frame"
                                className="w-16 h-16 absolute inset-0 m-auto z-10"
                            />
                        </div>

                        {/* Message Card */}
                        <div className="pt-14 w-full">
                            <img
                                src="./Groupmessage 3.svg"
                                alt="user details"
                                className="w-full h-auto max-w-[500px] mx-auto"
                            />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                        <h2 className="text-[#3A643C] font-semibold text-2xl md:text-4xl">
                            Choose Your Session Mode
                        </h2>
                        <p className="text-[#666666] font-dm text-sm md:text-base">
                            Amrutam offers you to connect with patients via Instant Chat, Instant Call, or Schedule Video call. Each option offers flexibility and personalized care to suit individual needs.
                        </p>
                    </div>
                </div>



                {/* fourth */}
                <div className="m-5 md:m-20 p-5 md:p-10 flex flex-col md:flex-row justify-around items-center gap-10">
                    {/* Message */}
                    <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                        <h2 className="text-[#3A643C] font-semibold text-2xl md:text-4xl">Smart Wallet</h2>
                        <p className="text-[#666666] font-dm text-sm md:text-base">
                            We understand the need for seamless transactions. With Amrutam Wallet, you can easily withdraw payments, and for your security, a one-time password is sent to your registered mobile number during withdrawals.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img src="./Groupmessage4.svg" alt="Smart Wallet" className="w-full h-auto max-w-[500px]" />
                    </div>
                </div>


                {/* fifth */}
                <div className="m-5 md:m-20 p-5 md:p-10 flex flex-col-reverse md:flex-row justify-between items-center gap-10">
                    {/* Left: Text */}
                    <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                        <h2 className="text-[#3A643C] font-semibold text-2xl md:text-4xl">
                            Flexible Work Timing
                        </h2>
                        <p className="text-[#666666] font-dm text-sm md:text-base">
                            We recognize the importance of managing your time. With the availability toggle in the doctor’s app, you control when patients can book consultations, ensuring a balanced and stress-free practice.
                        </p>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-1/2 relative flex flex-col items-center">
                        {/* Overlapping Icon */}
                        <div className="relative w-28 h-24 mb-6 md:top-20 md:left-40">
                            <img src="./Ellipse.svg" alt="background" className="absolute w-full h-full z-0" />
                            <img src="./work-history-solid-standard 1.svg" alt="icon" className="absolute inset-0 m-auto z-10" />
                        </div>

                        {/* Main Image */}
                        <img src="./Group5.svg" alt="Work History" className="w-full h-auto max-w-[500px]" />

                        {/* Bottom Floating Frame */}
                        <img src="./Frame 5.svg" alt="frame" className="relative -top-6 md:-top-10 md:left-20" />
                    </div>
                </div>



            </div>

        </div>
    )
}

export default WhyUs
