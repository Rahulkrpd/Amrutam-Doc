

const PopupLogin = () => {
    return (
        <div className="sticky top-0 bg-[#373636]  max-w-full h-16 flex justify-center items-center px-4 z-50 gap-4">
            <div className="text-[#D9D9D9] font-sans text-center">
                Register Yourself As An Amrutam Doctor

            </div>
            <div className=" w-20 p-2 m-1 md:absolute md:right-2  md:w-50 h-auto lg:absolute lg:right-40 xl:right-80 lg:h-14  bg-[#3A643B] text-white rounded-xl flex justify-center items-center gap-2">
                <img src="./doctor-01-solid-standard 1.svg" alt="doc" className="w-6 h-6" />
                <button className="text-sm font-medium">Join Now</button>
            </div>
        </div>



    )
}

export default PopupLogin
