
const Connect = () => {
    return (
        <div className="w-full  bg-[#FFEDBF] flex flex-col md:flex-row justify-center md:justify-around items-center px-4 md:px-5 py-8 overflow-y-visible">
            {/* Left Side */}
            <div className="w-4/5 md:w-2/5 space-y-6  md:relative  md:bottom-10">
                {/* Header */}
                <div className="text-center md:text-left">
                    <h1 className="text-[#3A643C] text-2xl md:text-4xl  font-bold">Get Started Today –</h1>
                    <h1 className="text-[#3A643C] text-2xl md:text-4xl font-bold">Download the App Now!</h1>
                    <p className="text-[#666666] text-base md:text-xl mt-4">
                        Simplify consultations, manage patients, and grow your practice—all in one place.
                    </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#3A643C]">
                    <div className="flex gap-3 items-center border border-[#9E9E9E] p-3 rounded-xl w-full max-w-64">
                        <img src="./leaf.svg" alt="Forum" className="w-12 flex-shrink-0" />
                        <p className="text-sm">Build Trust and Community with Forum</p>
                    </div>
                    <div className="flex gap-3 items-center border border-[#9E9E9E] p-3 rounded-xl w-full max-w-64">
                        <img src="./Dollar.svg" alt="Dollar" className="w-12 flex-shrink-0" />
                        <p className="text-sm">Earn More with Pay Per Conversation</p>
                    </div>
                    <div className="flex gap-3 items-center border border-[#9E9E9E] p-3 rounded-xl w-full max-w-64">
                        <img src="./call-outline.svg" alt="Call" className="w-12 flex-shrink-0" />
                        <p className="text-sm">Attract Patients with 5-Minute Free Call</p>
                    </div>
                    <div className="flex gap-3 items-center border border-[#9E9E9E] p-3 rounded-xl w-full max-w-64">
                        <img src="./wallet.svg" alt="Wallet" className="w-12 flex-shrink-0" />
                        <p className="text-sm">Instant Access to Your Earnings with Wallet</p>
                    </div>
                </div>

                {/* App Store Links */}
                <div className="flex flex-col sm:flex-row gap-5 pt-6 justify-center items-center mb-5 md:mt-0">
                    <img src="./GooglePlay.svg" alt="Google Play" className="w-full max-w-64 h-auto" />
                    <img src="./appstore.svg" alt="App Store" className="w-full max-w-64 h-auto" />
                </div>
            </div>

            {/* Right Side */}
            <div className="w-4/5 md:w-1/2 flex justify-center items-center overflow-y-visible">
                <img src="./Group 1000006299.svg" alt="App Screenshot" className="w-full max-w-md h-auto" />
            </div>
        </div>
    );
};

export default Connect;