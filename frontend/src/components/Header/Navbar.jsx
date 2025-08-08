

const Navbar = () => {
    return (
        <nav className="w-full h-28 bg-[#FFF7E2] flex justify-center items-center flex-col px-4">
            <div className="w-full max-w-6xl h-24 flex flex-col justify-center items-center">
                <div>
                    <img src="./image 45.svg" alt="" className="max-w-full h-auto" />
                </div>

                <ul className="w-full justify-center flex gap-4 md:gap-10 text-[#474747] text-sm md:text-base flex-wrap">
                    <li>About Us</li>
                    <li>Onboarding</li>
                    <li>FAQ</li>
                    <li>Testimonials</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
