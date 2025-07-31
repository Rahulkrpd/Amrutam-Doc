

const Navbar = () => {
    return (
        <nav className="w-full h-28 bg-[#FFF7E2] flex  justify-center items-center flex-col">
            <div className="w-124 h-24 flex  flex-col justify-center items-center ">
            <div>
                <img src="./image 45.svg" alt="" />
            </div>

                <ul className=" w-full justify-center  flex gap-10 text-[#474747] ">
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
