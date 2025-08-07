
const Connect = () => {
    return (
        <div className="w-full md:h-[637px]  bg-[#FFEDBF] flex flex-col md:flex-row justify-center items-center px-5 ">
            {/* Left Side */}
            <div className="md:w-1/2 space-y-10">
                {/* Header */}
                <div>
                    <h1 className="text-[#3A643C] text-3xl md:text-5xl font-bold">Get Started Today –</h1>
                    <h1 className="text-[#3A643C] text-3xl md:text-5xl font-bold">Download the App Now!</h1>
                    <p className="text-[#666666] text-lg md:text-xl mt-4">
                        Simplify consultations, manage patients, and grow your practice—all in one place.
                    </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-[#3A643C] mx-2">
                    <div className="flex gap-3 items-center border border-[#9E9E9E] p-3 rounded-xl w-64 ">
                        <img src="./leaf.svg" alt="Forum" className="w-12" />
                        <p className="text-sm">Build Trust and Community with Forum</p>
                    </div>
                    <div className="flex gap-3 items-center border border-[#9E9E9E] p-3 rounded-xl w-64 ">
                        <img src="./Dollar.svg" alt="Dollar" className="w-12" />
                        <p className="text-sm">Earn More with Pay Per Conversation</p>
                    </div>
                    <div className="flex gap-3 items-center border border-[#9E9E9E] p-3 rounded-xl w-64 ">
                        <img src="./call-outline.svg" alt="Call" className="w-12" />
                        <p className="text-sm">Attract Patients with 5-Minute Free Call</p>
                    </div>
                    <div className="flex gap-3 items-center border border-[#9E9E9E] p-3 rounded-xl w-64">
                        <img src="./wallet.svg" alt="Wallet" className="w-12" />
                        <p className="text-sm">Instant Access to Your Earnings with Wallet</p>
                    </div>
                </div>

                {/* App Store Links */}
                <div className="flex gap-5 pt-6  justify-center items-center mb-5 md:mt-0">
                    <img src="./GooglePlay.svg" alt="Google Play" className="w-64" />
                    <img src="./appstore.svg" alt="App Store" className="w-64" />
                </div>
            </div>

            {/* Right Side */}
            <div className="   md:relative md:right-5 md:bottom-10  ">
                <img src="./Group 1000006299.svg" alt="App Screenshot" className="md:w-full md:h-full" />
            </div>
        </div>
    );
};

export default Connect;
